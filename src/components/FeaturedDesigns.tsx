import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselItems } from "@/constants";

const FeaturedDesigns: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null); // Reference to the slider
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handlePrevClick = () => {
    if (sliderRef) {
      sliderRef.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef) {
      sliderRef.slickNext();
    }
  };

  const settings = {
    dots: true,
    infinite: false, 
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    beforeChange: (next: number) => {
      setIsFirstSlide(next === 0); // Update state for the first slide
      setIsLastSlide(next === carouselItems.length - settings.slidesToShow);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
    className="px-5 py-8 relative mx-5">
      {/* Left Arrow */}
      {!isFirstSlide && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#da1926] text-white rounded-full p-2 z-10 cursor-pointer"
          onClick={handlePrevClick}
        >
          <ChevronLeft />
        </button>
      )}

      {/* Right Arrow */}
      {!isLastSlide && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#da1926] text-white rounded-full p-2 z-10 cursor-pointer"
          onClick={handleNextClick}
        >
          <ChevronRight />
        </button>
      )}

      <Slider
        {...settings}
        ref={(slider) => setSliderRef(slider)}
        className="cursor-pointer"
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative overflow-hidden bg-white shadow-md rounded-lg w-full h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-[#da1926] opacity-0 hover:opacity-90 transition-opacity flex flex-col items-center justify-center text-white px-4 text-center">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm mt-2">{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-white text-[#da1926] rounded-md">
                  Find out more
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedDesigns;
