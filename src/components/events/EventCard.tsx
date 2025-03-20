import React from 'react';
import { Calendar } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';
import Button from '../ui/Button';

interface Event {
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
  };
}

interface EventCardProps {
  event: Event;
  onSelect: (event: Event) => void;
}

const EventCard = ({ event, onSelect }: EventCardProps) => (
  <AnimatedCard>
    <div className="relative mb-4">
      <img
        src={event.attributes.cover_images.data[0].attributes.url}
        alt={event.attributes.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white">{event.attributes.title}</h3>

      <div className="flex items-center text-blue-400">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{event.attributes.date_time}</span>
      </div>

      <p className="text-gray-400">{event.attributes.event_type}</p>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => onSelect(event)}
      >
        Know More
      </Button>
    </div>
  </AnimatedCard>
);

export default EventCard;
