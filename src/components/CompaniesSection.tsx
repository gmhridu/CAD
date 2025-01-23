

const CompaniesSection = () => {
  return (
    <section className="section section-companies mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Join companies that use Cad Crowd design talent
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {/* Company Logos */}
            <div className="flex justify-center">
              <img
                loading="lazy"
                src="https://static.cadcrowd.com/themes/v5/images/logo/target.svg"
                alt="Target"
                className="w-40 h-auto"
              />
            </div>
            <div className="flex justify-center">
              <img
                loading="lazy"
                src="https://static.cadcrowd.com/themes/v5/images/logo/us_army_corps_of_eng-charcoal.svg"
                alt="Company Logo 2"
                className="w-40 h-auto"
              />
            </div>
            <div className="flex justify-center">
              <img
                loading="lazy"
                src="https://static.cadcrowd.com/themes/v5/images/logo/Tiffany-charcoal.svg"
                alt="Company Logo 3"
                className="w-40 h-auto"
              />
            </div>
            <div className="flex justify-center">
              <img
                loading="lazy"
                src="https://static.cadcrowd.com/themes/v5/images/logo/JPL.svg"
                alt="Company Logo 4"
                className="w-40 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
