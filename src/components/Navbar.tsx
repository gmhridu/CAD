import { navList } from "@/constants";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { logoImg } from "@/utils";

const Navbar = () => {
  return (
    <header className="w-full py-2 sm:px-10 px-5 flex justify-between items-center shrink-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-200">
      <nav className="flex w-full items-center">
        <Link to={"/"} className="cursor-pointer">
          <img src={logoImg} alt="PSB" className="size-16" />
        </Link>
        <div className="flex flex-1 justify-center max-sm:hidden items-center gap-1.5">
          {navList.map((nav, i) => (
            <NavLink
              to={nav.path}
              key={i}
              className={({ isActive }) =>
                cn(
                  "relative px-3 text-sm font-medium cursor-pointer hover:text-black",
                  {
                    "text-[#484848]": !isActive,
                    "text-black after:content-[''] after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-[3px] after:bg-[#fe595c]":
                      isActive,
                  }
                )
              }
            >
              {nav.title}
            </NavLink>
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
