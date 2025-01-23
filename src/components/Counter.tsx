const Counter = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Counter 1 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="w-10 h-10">
              <img
                src="https://static.cadcrowd.com/themes/v5/images/icons/icon-designers.svg"
                alt="Expert designers"
                className="w-full h-full"
              />
            </span>
            <div className="text-4xl font-bold text-gray-800">91,513</div>
            <div className="text-lg text-gray-600">Expert designers</div>
          </div>

          {/* Counter 2 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="w-10 h-10">
              <img
                src="https://static.cadcrowd.com/themes/v5/images/icons/icon-designs.svg"
                alt="Designs delivered"
                className="w-full h-full"
              />
            </span>
            <div className="text-4xl font-bold text-gray-800">30,070</div>
            <div className="text-lg text-gray-600">Designs delivered</div>
          </div>

          {/* Counter 3 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="w-10 h-10">
              <img
                src="https://static.cadcrowd.com/themes/v5/images/icons/icon-clients.svg"
                alt="Satisfied clients"
                className="w-full h-full"
              />
            </span>
            <div className="text-4xl font-bold text-gray-800">1,500+</div>
            <div className="text-lg text-gray-600">Satisfied clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
