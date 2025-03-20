import { useState, FormEvent } from 'react';
import Button from '../../components/ui/Button';
import ContactInput from '../../components/ui/ContactInput';
import { Send } from 'lucide-react';
import { z } from 'zod';

// Define the Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name must be 50 characters or less'),
  email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
  message: z.string().min(1, 'Message is required').max(500, 'Message must be 500 characters or less'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');
    setValidationErrors({});

    const validationResult = formSchema.safeParse(formData);
    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      setValidationErrors({
        name: errors.name?.[0],
        email: errors.email?.[0],
        message: errors.message?.[0],
      });
      setIsSubmitting(false);
      return;
    }

    try {
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('There was an error sending your message.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <ContactInput
          label="Name"
          value={formData.name}
          onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
          required
        />
        {validationErrors.name && <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>}
      </div>

      <div>
        <ContactInput
          type="email"
          label="Email"
          value={formData.email}
          onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
          required
        />
        {validationErrors.email && <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>}
      </div>

      <div>
        <ContactInput
          type="textarea"
          label="Message"
          value={formData.message}
          onChange={(value) => setFormData((prev) => ({ ...prev, message: value }))}
          required
        />
        {validationErrors.message && <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>}
      </div>

      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <Button type="submit" className="w-full group" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};

export default ContactForm;