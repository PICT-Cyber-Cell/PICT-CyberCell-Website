import { type FC } from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';

interface EventDetailsProps {
  title: string;
  date: string;
  type: string;
  location: string;
  body: string;
}

const EventDetails: FC<EventDetailsProps> = ({ title, date, type, location, body }) => (
  <div className="space-y-4 flex-1">
    <h2 className="text-2xl font-bold text-white">{title}</h2>

    <div className="space-y-2">
      <div className="flex items-center gap-2 text-blue-400">
        <Calendar className="w-4 h-4" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2 text-blue-400">
        <Tag className="w-4 h-4" />
        <span>{type}</span>
      </div>
      <div className="flex items-center gap-2 text-blue-400">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>
    </div>

    <div className="mt-4 text-gray-300 whitespace-pre-line h-[120px] overflow-y-auto custom-scrollbar pr-4">
      {body}
    </div>
  </div>
);