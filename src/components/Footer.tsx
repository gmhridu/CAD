import { logoImg } from "@/utils";
import { FacebookIcon, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="mx-5">
      <hr className="border-t border-gray-300 my-4" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6">
        <div className="flex-1 flex items-center space-x-2">
          <img
            loading="lazy"
            src={logoImg}
            alt="Cad Crowd"
            className="size-16"
          />
          <span>© {year} Cad Crowd. All rights reserved</span>
          <ul className="flex items-center space-x-2 ml-4">
            <li>
              <a
                href="/page/privacypolicy"
                className="text-gray-400 hover:text-black"
              >
                Privacy
              </a>
            </li>
            <li>
              <span className="text-gray-400">·</span>
            </li>
            <li>
              <a
                href="/page/termsofservice"
                className="text-gray-400 hover:text-black"
              >
                Terms
              </a>
            </li>
            <li>
              <span className="text-gray-400">·</span>
            </li>
            <li>
              <a href="/sitemap" className="text-gray-400 hover:text-black">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        <div className="flex space-x-3 mt-4 md:mt-0">
          <FacebookIcon
            className="text-2xl border border-[#767676] bg-[#767676] p-1 size-8 rounded-full"
            color="white"
          />
          <Twitter
            className="text-2xl border border-[#767676] bg-[#767676] p-1 size-8 rounded-full"
            color="white"
          />
          <Linkedin
            className="text-2xl border border-[#767676] bg-[#767676] p-1 size-8 rounded-full"
            color="white"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
