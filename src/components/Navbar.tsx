import { navList } from "@/constants";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center shrink-0 border-b border-gray-200 mb-10">
      <nav className="flex w-full items-center">
        {/* <img src={logoImg} alt="PSB" /> */}
        <h1 className="text-2xl font-bold text-[#fe595c]">PSB</h1>
        <div className="flex flex-1 justify-center max-sm:hidden items-center">
          {navList.map((nav, i) => (
            <div
              key={i}
              className="px-3 text-sm font-medium cursor-pointer text-[#484848] hover:text-black"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5 max-sm:justify-end max-sm:flex-1">
          <Search size={18} className="cursor-pointer" />

          <div className="flex items-center justify-center gap-3">
            <p className="text-sm font-medium cursor-pointer text-[#484848] hover:text-black">
              Sign up
            </p>
            <p className="text-sm font-medium cursor-pointer text-[#484848] hover:text-black">
              Login
            </p>

            <Button variant={"primary"} size={"sm"} className="hidden md:block">
              Get a quote
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
