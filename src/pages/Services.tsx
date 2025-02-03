import { AllServices } from "@/constants";
import { contactBGImg } from "@/utils";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const Services = () => {
  return (
    <>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          color: "#fff",
          paddingBottom: "28px",
          backgroundImage: `linear-gradient(rgba(0, 132, 137, 0.5), rgba(0, 132, 121, 0.5)), url("${contactBGImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-2"
      >
        <h1 className="text-2xl pt-8 pb-8 text-left px-10 font-bold">
          Our Services
        </h1>
      </motion.div>

      {/* Promotional Text Section */}
      <section className="container mx-auto py-8 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-2xl font-semibold text-[#008489] mb-4"
        >
          Elevate Your Projects with PSB 3D Modelling & CAD Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-lg text-gray-700 mb-6"
        >
          We specialize in a comprehensive range of services that include:
        </motion.p>

        {/* Services Grid Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="container mx-auto flex flex-col items-center justify-center my-8 cursor-pointer"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {AllServices.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="border border-gray-200 hover:border-[#007d8c] flex flex-col items-center p-6 relative overflow-hidden transition-all"
              >
                <div className="bg-[#0084890F] rounded-full p-3 w-10 mb-4">
                  <img src={item.img} alt={item.title} className="size-4" />
                </div>
                <h2 className="text-xl font-bold text-center">{item.title}</h2>

                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[100%] transition-opacity flex flex-col items-center justify-center text-black border-[#007d8c] px-4 text-center">
                  <h3>{item.details}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-lg text-gray-700 mb-6"
        >
          We would welcome an opportunity to work on a trial project for you to
          demonstrate the quality of our work. We would be pleased to offer you
          services from a local company that offers offshore rates with
          competitive pricing. Our rate varies from UK £20/Hour for various
          ranges of services.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-lg text-gray-700 mb-6"
        >
          Please suggest if we can get together for a Teams or Zoom meeting to
          walk you through our services and project experience.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-lg text-gray-700 mb-6"
        >
          I look forward to hearing from you soon.
        </motion.p>
      </section>
    </>
  );
};

export default Services;
