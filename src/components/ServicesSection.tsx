import { services } from "@/constants";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="mx-5 px-5 flex flex-col items-center justify-center my-8 cursor-pointer">
      <h1 className="text-center font-bold text-[#333] text-3xl max-w-[768px] mb-8">
        Help with CAD services, industrial design, patents, manufacturing,
        licensing & more
      </h1>
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 items-center gap-2">
        {services.map((project, i) => (
          <div
            key={i}
            className="project-block-one border border-gray-100 rounded-md"
          >
            <div className="inner-box">
              <div className="image">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
                <div className="caption p-4">
                  <h4 className="font-semibold text-lg line-clamp-1">
                    {project.title}
                  </h4>
                </div>

                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="content">
                      <h4 className="line-clamp-1">{project.title}</h4>
                      <div className="text line-clamp-2">{project.details}</div>
                     <Link to={'/services'}>
                     <Button variant={"primary"} className="read-more">
                        Read More
                      </Button>
                     </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-8 cursor-pointer">
        <Link to={"/services"}>
          <Button variant={"primary"} size={"lg"} className="cursor-pointer">
            See all services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
