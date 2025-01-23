const Hire = () => {
  return (
    <section className="bg-[#f5f5f5] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <div className="flex flex-col md:flex-row items-center">
              {/* Content Section */}
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Hire CAD designers, engineers, & 3D modelers on demand
                </h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    World-class help for your project
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    Fast and simple hiring process
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    Our vetted professionals deliver on time and on budget
                  </li>
                </ul>
                <a
                  href="/how-it-works"
                  title="Understand how our service works"
                  className="text-blue-500 hover:underline inline-flex items-center"
                >
                  Learn more <i className="fas fa-chevron-right ml-2"></i>
                </a>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center md:justify-end order-last">
                <div className="w-3/4 md:w-auto">
                  <img
                    src="https://static.cadcrowd.com/themes/v5/images/homepage/user-profile.png"
                    alt="User Profile"
                    className="img-fluid"
                    width="452"
                    height="273"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
