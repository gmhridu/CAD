import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import Companies from "@/components/Companies";
import FeaturedDesigns from "@/components/FeaturedDesigns";
import ServicesSection from "@/components/ServicesSection";
import Contractors from "@/components/Contractors";
import QuotesSection from "@/components/QuotesSection";
import ActionsSection from "@/components/ActionsSection";
import Counter from "@/components/Counter";
import Hire from "@/components/Hire";
import CompaniesSection from "@/components/CompaniesSection";
import CallToAction from "@/components/CallToAction";
import GetInTouch from "./components/GetInTouch";
import Slider from "./components/Slider";
import { Button } from "@/components/ui/Button";
import { ChevronUp } from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    // Refresh AOS to recalculate element positions after scrolling
    AOS.refresh();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="cursor-pointer">
      <Slider />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-down"
      >
        <Companies />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-down"
      >
        <FeaturedDesigns />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <Contractors />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <QuotesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <ActionsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <Counter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <Hire />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <CompaniesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <CallToAction />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <GetInTouch />
      </motion.div>

      {/* Floating Back-to-Top Button */}
      {isScrolled && (
        <Button
          onClick={scrollToTop}
          variant={"primary"}
          size={"icon"}
          className="fixed bottom-6 right-6 transition-all transform hover:scale-110"
        >
          <ChevronUp className="size-8" />
        </Button>
      )}
    </div>
  );
}

export default App;
