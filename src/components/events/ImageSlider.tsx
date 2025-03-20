import { useEffect, useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev - 200;
        return newPos <= -(images.length * 200) ? 0 : newPos;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-24 overflow-hidden rounded-lg">
      <div 
        className="absolute flex transition-transform duration-10 ease-linear"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Duplicate images for infinite scroll effect */}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="w-48 h-24 flex-shrink-0 px-2"
          >
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;