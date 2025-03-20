import { X } from 'lucide-react';
import Button from '../ui/Button';
import ImageSlider from './ImageSlider';

interface EventModalProps {
  event: {
    id: number;
    attributes: {
      title: string;
      date_time: string;
      event_type: string;
      location: string;
      body: string;
      cover_images: {
        data: Array<{
          attributes: {
            url: string;
          };
        }>;
      };
      slider_images: string[];
    };
  };
  onClose: () => void;
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  const allImages = [
    event.attributes.cover_images.data[0].attributes.url,
    ...event.attributes.slider_images.filter((img): img is string => typeof img === 'string')
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl bg-black/90 border border-blue-500/20 rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Main image */}
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src={event.attributes.cover_images.data[0].attributes.url}
                alt={event.attributes.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Event details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                {event.attributes.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {event.attributes.event_type}
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {event.attributes.date_time}
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {event.attributes.location}
                </div>
              </div>

              <div className="text-gray-300 whitespace-pre-line h-[180px] overflow-y-auto custom-scrollbar pr-4">
                {event.attributes.body}
              </div>
            </div>
          </div>

          {/* Image slider */}
          {allImages.length > 1 && (
            <div className="border-t border-blue-500/20 pt-4">
              <ImageSlider images={allImages.slice(1)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;