import { avatarImg } from "@/utils";

const QuotesSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          People who <span className="text-red-500">❤</span> PSB
        </h2>

        <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
          <div>
            <img
              src={avatarImg}
              alt="Avatar"
              width={240}
              height={240}
              className="rounded-lg mr-4"
            />
          </div>
          <div className="p-6 rounded-lg max-w-lg">
            <div className="flex items-start">
              <span className="text-yellow-400 text-5xl font-bold">“</span>
              <p className="text-gray-600 text-lg leading-relaxed">
                The team was extremely professional, with quick responses and
                competitive pricing. I will definitely use Cad Crowd again and
                recommend them.
              </p>
            </div>
            <div className="flex items-center justify-center mt-6 gap-7">
              <div className={'text-left'}>
                <h5 className="font-bold text-gray-800">Reena Factor</h5>
                <h6 className="text-gray-500 text-sm">Brand Manager</h6>
              </div>
              <img
                src="https://static.cadcrowd.com/themes/v5/images/logo/media/svg/kpmg-2.svg"
                alt="KPMG"
                className="w-20 h-auto"
              />
            </div>
          </div>
        </div>

        <button className="mt-8 px-6 py-3 border border-gray-800 text-gray-800 rounded hover:bg-gray-100">
          Read more
        </button>

        <div className="flex items-center justify-center mt-12 gap-8">
          <a
            href="https://www.trustpilot.com/review/cadcrowd.com?stars=5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-auto"
          >
            <img
              src="https://static.cadcrowd.com/themes/v5/images/logo/trustpilot-2.svg"
              alt="Trustpilot"
            />
          </a>
          <a
            href="https://www.g2.com/products/cad-crowd/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-auto"
          >
            <img
              src="https://static.cadcrowd.com/themes/v5/images/logo/g2.svg"
              alt="G2"
            />
          </a>
          <a
            href="https://www.bbb.org/ca/ab/calgary/profile/industrial-design/cad-crowd-0017-91749"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-auto"
          >
            <img
              src="https://static.cadcrowd.com/themes/v5/images/logo/bbb-accredited.svg"
              alt="BBB Accredited"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
