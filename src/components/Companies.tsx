import { companyLogos } from "@/constants";

const Companies = () => {
  return (
    <section className="mt-9.5 mb-8">
      <div className="">
        <p className="text-center text-[#999] font-medium mb-4 lg:hidden">Trusted by: </p>
      </div>
      <div className="bg-[#f5f5f5] py-2 flex flex-wrap lg:flex-row gap-10 justify-center items-center">
        <p className="text-center text-[#000] font-medium hidden lg:block">Trusted by: </p>
        {companyLogos.map((com, i) => (
          <img key={i} src={com} alt="Company Images" width={90} height={29}/>
        ))}
      </div>
    </section>
  );
};

export default Companies;
