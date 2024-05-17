import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    img: "src/Images/Slider1.webp",
  },
  {
    id: 2,
    img: "src/Images/Slider2.webp",
  },
  {
    id: 3,
    img: "src/Images/Slider3.webp",
  },
  {
    id: 4,
    img: "src/Images/Slider4.webp",
  },
  {
    id: 5,
    img: "src/Images/Slider5.webp",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const startSlideTimer = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const switchSlide = (index) => {
    setCurrentSlide(index);
    stopSlideTimer();
    startSlideTimer();
  };

  return (
    <div className="relative w-full overflow-hidden mt-2 rounded">
      <div className="relative h-32 md:h-80 lg:h-96  ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="h-full bg-cover bg-left-[50%] "
              style={{ backgroundImage: `url(${slide.img})` }}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 md:pb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => switchSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 mx-1 md:mx-2 rounded-full ${
              index === currentSlide ? 'bg-purple-800' : 'bg-purple-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
