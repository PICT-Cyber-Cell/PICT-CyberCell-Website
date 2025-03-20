import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from 'tls';

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body as RequestBody;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const SMTP_HOST = 'smtp.gmail.com';
  const SMTP_PORT = 587;
  const EMAIL_USER = 'kunjchandak05@gmail.com';
  const EMAIL_PASS = 'znfa krhe tvxp ipiz';

  if (!EMAIL_PASS) {
    return res.status(500).json({ message: 'Missing EMAIL_PASS in environment variables' });
  }

  const sendEmail = () => {
    return new Promise((resolve, reject) => {
      const socket = connect({ host: SMTP_HOST, port: SMTP_PORT }, () => {
        socket.write('EHLO localhost\r\n');
        socket.write('STARTTLS\r\n');
      });

      socket.on('data', (data) => {
        const response = data.toString();
        if (response.includes('220')) {
          socket.write(`AUTH LOGIN\r\n`);
          socket.write(`${Buffer.from(EMAIL_USER).toString('base64')}\r\n`);
          socket.write(`${Buffer.from(EMAIL_PASS).toString('base64')}\r\n`);
          socket.write(`MAIL FROM:<${EMAIL_USER}>\r\n`);
          socket.write(`RCPT TO:<${EMAIL_USER}>\r\n`);
          socket.write('DATA\r\n');
          socket.write(`Subject: New Contact Request from Website\r\n`);
          socket.write(`From: ${name} <${email}>\r\n`);
          socket.write(`To: ${EMAIL_USER}\r\n`);
          socket.write('\r\n');
          socket.write(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\r\n`);
          socket.write('.\r\n');
          socket.write('QUIT\r\n');
        }
      });

      socket.on('end', () => resolve('Email sent'));
      socket.on('error', (err) => reject(err));
    });
  };

  try {
    await sendEmail();
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: (error as Error).message });
  }
}