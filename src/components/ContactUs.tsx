import Contact from "@/pages/Contact";
import { contactBGImg } from "@/utils";

const ContactUs = () => {
  return (
    <>
      <div
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
          Contact PSB Support Team
        </h1>
      </div>
      <div className="flex items-center flex-col md:flex-row container mx-auto">
        {/* Left Section - Services Description */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Elevate Your Projects with PSB 3D Modelling & CAD Services
          </h2>
          <p className="text-gray-600 mb-4">
            We specialize in a comprehensive range of services that include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Highway Drawing Drafting</li>
            <li>2D CAD Drafting Services</li>
            <li>3D/Revit BIM Modelling</li>
            <li>Design Validation</li>
            <li>Pre-construction coordination & clash detection</li>
            <li>Bill of Material generation</li>
            <li>As-built drawing and modeling</li>
            <li>Field Survey data digitalisation</li>
            <li>Facilities management data integration</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We would welcome an opportunity to work on a trial project for you
            to demonstrate the quality of our work.
          </p>
          <p className="mt-4 font-bold text-gray-800">
            Let’s schedule a Zoom or Teams meeting to walk you through our
            services.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-6">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
