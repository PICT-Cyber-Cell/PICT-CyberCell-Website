import { type FC } from 'react';

interface EventImageProps {
  url: string;
  title: string;
}

const EventImage: FC<EventImageProps> = ({ url, title }) => (
  <div className="relative h-[250px] w-[250px] rounded-lg overflow-hidden">
    <img
      src={url}
      alt={title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  </div>
);

export default EventImage;