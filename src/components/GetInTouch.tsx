import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const GetInTouch = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Got a question? Get in touch
      </h1>
      
      <div className={cn(
        "max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200 mt-6"
      )}>
        <ContactForm variant="simple" />
        
        <p className="text-center text-lg pt-4 mt-4 border-t border-gray-200">
          Or{" "}
          <Link to={"/contact"}>
            <span className="pl-1 text-[#008489] hover:underline cursor-pointer">
              visit our contact page
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;