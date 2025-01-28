import { services } from "@/constants";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center my-8 cursor-pointer">
      <h1 className="text-center font-bold text-[#333] text-3xl max-w-[768px] mb-8">
        Help with CAD services, industrial design, patents, manufacturing,
        licensing & more
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((item, i) => (
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

      <div className="my-8 cursor-pointer">
        <Link to={"/services"}>
          <Button variant={"outline"} size={"lg"} className="cursor-pointer">
            See all services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
