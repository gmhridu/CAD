import Contact from "@/pages/Contact";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import HeaderComponent from "@/components/HeaderComponent.tsx";

const About = () => {
  return (
    <>
      <HeaderComponent text={'About PSB Support Team'}/>

        {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center flex-col md:flex-row container mx-auto"
      >
        {/* Left Section - Services Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 p-6 bg-white rounded-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About PSB Limited
          </h2>
          <p className="text-gray-600 mb-4">
            PSB Limited is a UK-based, multi-disciplinary CAD Services company.
            Our team of CAD Technicians/Engineers produces a wide range of 2D
            CAD Drawings and 3D CAD Models tailored to various industries and
            applications.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            Our Mission
          </h3>
          <p className="text-gray-600 mt-4">
            <strong>Consistent Quality:</strong> Our focus is to provide our
            clients with consistent quality. We have developed multiple
            processes to ensure that our deliverables meet the same high
            standards every time, so our clients can always rely on us.
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Regular Communication:</strong> We do not make assumptions –
            we pick up the phone, email, or request a screen share. We believe
            that regular communication is key to a successful project.
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Timely Delivery:</strong> We are not a one-man band and can
            program our workload more efficiently. We always provide a lead time
            and strive to meet it. Any factors that might delay our submission
            are made known instantly, and we keep our clients updated regularly.
          </p>
          <p className="text-gray-600 mt-4">
            Excellent processes are the cornerstone for successfully outsourcing
            your CAD requirements.
          </p>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 p-6"
        >
          <Contact />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
