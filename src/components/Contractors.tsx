import { contractor } from "@/constants";
import { ChevronRight } from "lucide-react";

const Contractors = () => {
  return (
    <div className="bg-[#f5f5f5] p-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-[#333] text-3xl max-w-[768px] mb-10">
          Remote 3D modelers, designers & drafting contractors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractor.map((item, i) => (
            <div key={i} className="p-6 rounded-lg flex flex-col items-center">
              <img src={item.image} alt={item.title} className="w-20 h-20" />
              <h1 className="mt-4 text-xl font-bold text-center">
                {item.title}
              </h1>
              <p className="mt-4 text-center text-gray-600">{item.details}</p>
              <p className="inline-flex items-center mt-5 text-[#008489] cursor-pointer">
                {item.btnTitle} <ChevronRight className="ml-2" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contractors;
