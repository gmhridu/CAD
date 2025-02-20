import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slider1Img, slider2Img, slider3Img } from "@/utils";
import Image from "./ui/Image";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [showButtons, setShowButtons] = useState(false);

  // Array for image sources, text, and links
  const slides = [
    {
      image: slider1Img,
      heading: "Innovative CAD Design Solutions",
      subHeading: "Transforming Ideas into Reality",
      text: "Experience precision and creativity with our cutting-edge CAD services. From industrial design to prototyping, we help bring your concepts to life with unmatched accuracy.",
    },
    {
      image: slider2Img,
      heading: "Expert Industrial Design Services",
      subHeading: "Enhancing Product Development",
      text: "Our team delivers innovative designs that meet functionality, efficiency, and aesthetic goals. Achieve optimal results with our tailored CAD solutions for various industries.",
    },
    {
      image: slider3Img,
      heading: "Seamless Engineering and Prototyping",
      subHeading: "From Blueprint to Market-Ready Products",
      text: "Accelerate your product development process with our comprehensive CAD modeling and rapid prototyping services, ensuring top-quality results at every stage.",
    },
  ];

  const handleNext = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="main-slider2 relative w-full h-[50vh] sm:h-[60vh] lg:h-[75vh]">
      <div
        className="relative w-full h-full flex justify-center items-center bg-black overflow-hidden"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Current Image Layer */}
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="slider-wrapper image absolute w-full h-full object-cover"
          />

          {/* Previous Image Layer (Moves Down) */}
          <AnimatePresence>
            {prevSlide !== null && (
              <motion.div
                key={prevSlide}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: "100%", opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-full h-full"
              >
                <Image
                  src={slides[prevSlide].image}
                  alt={`Slide ${prevSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Slider Caption */}
        <div className="slider-caption absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 text-white p-4">
          <div className="container">
            <motion.h2
              key={`subHeading-${currentSlide}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm sm:text-5xl font-medium"
            >
              {slides[currentSlide].subHeading}
            </motion.h2>
            <motion.h1
              key={`heading-${currentSlide}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-6xl font-bold text-[#da1926]"
            >
              {slides[currentSlide].heading}
            </motion.h1>
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm text sm:max-w-[600px] text-[#fff] mt-4"
            >
              {slides[currentSlide].text}
            </motion.div>
            <motion.div
              key={`link-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="link-btn sm:mt-6"
            >
              <Link to={"/about"}>
                <Button variant={"primary"}>Contact Us</Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={handlePrev}
          initial={{ opacity: 0 }}
          animate={{ opacity: showButtons ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-5 md:left-10 z-10 bg-[#da1926] p-3 md:p-4 rounded-full hover:bg-opacity-75 transition cursor-pointer"
        >
          <ChevronLeft size={40} color="white" className="cursor-pointer" />
        </motion.button>

        <motion.button
          onClick={handleNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: showButtons ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-5 md:right-10 z-10 bg-[#da1926] p-3 md:p-4 rounded-full hover:bg-opacity-75 transition cursor-pointer"
        >
          <ChevronRight size={40} color="white" className="cursor-pointer" />
        </motion.button>
      </div>
    </section>
  );
};

export default Slider;
