const ActionsSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-5xl">
            <div className="flex flex-col lg:flex-row justify-between">
              {/* Left Content */}
              <div className="lg:w-5/12 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-6">
                  Find 3D CAD designers, mechanical engineers, product experts &
                  more
                </h2>
                <ul className="hidden md:block space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Confidentiality and NDA’s for services</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Full intellectual property ownership</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Top 1% hand-picked & vetted professionals</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Encryption for secure data & file sharing</span>
                  </li>
                </ul>
                <div className="block md:hidden text-gray-700">
                  Get started with CAD services, product development and new
                  invention design services. Confidentially upload your project
                  notes for a free estimate.
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:w-6/12 flex flex-col space-y-6">
                {/* Client Card */}
                <a
                  href="/quote"
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
                >
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src="https://static.cadcrowd.com/themes/v5/images/client.svg"
                        alt="Client"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="sm:ml-6 mt-4 sm:mt-0">
                      <h3 className="text-xl font-semibold">Our clients</h3>
                      <p className="text-gray-600 mt-2">
                        Get started on your 3D modeling, CAD design or
                        engineering project in minutes
                      </p>
                      <span className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                        Get confidential estimate
                      </span>
                    </div>
                  </div>
                </a>

                {/* Designer Card */}
                <a
                  href="/designers"
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
                >
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src="https://static.cadcrowd.com/themes/v5/images/designer.svg"
                        alt="Designer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="sm:ml-6 mt-4 sm:mt-0">
                      <h3 className="text-xl font-semibold">
                        Freelance experts
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Work on unique projects, build a reputation and make
                        money
                      </p>
                      <span className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                        Designer signup
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
