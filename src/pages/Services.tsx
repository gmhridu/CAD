import { AllServices } from "@/constants";
import { contactBGImg } from "@/utils";

const Services = () => {
  return (
    <>
      {/* Header Section */}
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
          Our Services
        </h1>
      </div>

      {/* Promotional Text Section */}
      <section className="container mx-auto py-8 px-6 text-center">
        <h2 className="text-2xl font-semibold text-[#008489] mb-4">
          Elevate Your Projects with PSB 3D Modelling & CAD Services
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We specialize in a comprehensive range of services that include:
        </p>
        {/* Services Grid Section */}
        <section className="container mx-auto flex flex-col items-center justify-center my-8 cursor-pointer">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AllServices.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 hover:border-[#007d8c] flex flex-col items-center p-6 relative overflow-hidden transition-all"
              >
                <div className="bg-[#0084890F] rounded-full p-3 w-10 mb-4">
                  <img src={item.img} alt={item.title} className="size-4" />
                </div>
                <h2 className="text-xl font-bold text-center">{item.title}</h2>

                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[100%] transition-opacity flex flex-col items-center justify-center text-black border-[#007d8c] px-4 text-center">
                  <h3>{item.details}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        <p className="text-lg text-gray-700 mb-6">
          We would welcome an opportunity to work on a trial project for you to
          demonstrate the quality of our work. We would be pleased to offer you
          services from a local company that offers offshore rates with
          competitive pricing. Our rate varies from UK £20/Hour for various
          ranges of services.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Please suggest if we can get together for a Teams or Zoom meeting to
          walk you through our services and project experience.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          I look forward to hearing from you soon.
        </p>
      </section>
    </>
  );
};

export default Services;
