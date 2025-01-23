import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <div className="">
        <h1 className="text-[38px] leading-[1.38] tracking-tighter text-wrap font-extrabold max-w-[768px] text-center mt-5 mb-2.5">
          Freelance CAD design, engineering, 3D modeling & drafting services
        </h1>
        <p className="text-center text-2xl font-normal max-w-[768px]">
          Hire 3D modelers, engineers, 3D designers, and remote CAD services
          talent on demand.
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <Button variant={"primary"} size={"lg"} className="text-base">
            Get quote
          </Button>
          <div className="group">
            <Button
              variant={"outline"}
              size={"lg"}
              className="cursor-pointer border-2 text-base hover:bg-[#484848] hover:border-[#484848] group-hover:text-white"
            >
              Learn more
              <ChevronRight
                size={20}
                className="text-black transition-colors group-hover:text-white"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
