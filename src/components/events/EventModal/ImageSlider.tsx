import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setPosition((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setPosition((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-20 overflow-hidden rounded-lg">
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrev}
          className="p-1 bg-black/50 text-white rounded-r-lg hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex gap-2 px-8 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-32 h-20 flex-shrink-0 transition-opacity duration-300 ${
              index === position ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNext}
          className="p-1 bg-black/50 text-white rounded-l-lg hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};