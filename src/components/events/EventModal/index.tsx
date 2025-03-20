import { X } from 'lucide-react';
import EventImage from './EventImage';
import EventDetails from './EventDetails';
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
      slider_images: (string | number)[];
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
      
      <div className="relative w-full max-w-4xl bg-black/90 border border-blue-500/20 rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <div className="flex gap-6 mb-6">
            <EventImage 
              url={event.attributes.cover_images.data[0].attributes.url}
              title={event.attributes.title}
            />
            <EventDetails 
              title={event.attributes.title}
              date={event.attributes.date_time}
              type={event.attributes.event_type}
              location={event.attributes.location}
              body={event.attributes.body}
            />
          </div>

          {allImages.length > 1 && (
            <div className="border-t border-blue-500/20 pt-4">
              <ImageSlider images={allImages} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;