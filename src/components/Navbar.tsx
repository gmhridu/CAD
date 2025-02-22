import { navList } from "@/constants";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { logoImg } from "@/utils";

const Navbar = () => {
  return (
    <header className="w-full bg-[#040913] py-2 sm:px-10 px-5  shrink-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#da1926] z-10">
      <nav className="flex w-full justify-between items-center">
        <div className="size-16">
          <Link to={"/"} className="cursor-pointer">
            <img src={logoImg} alt="PSB" className="w-full h-full rounded-md" />
          </Link>
        </div>
        <div className="flex  justify-center max-sm:hidden items-center gap-1.5">
          {navList.map((nav, i) => (
            <NavLink
              to={nav.path}
              key={i}
              className={({ isActive }) =>
                cn("relative px-3 text-lg font-medium cursor-pointer", {
                  "text-white": !isActive,
                  "text-[#da1926]": isActive,
                })
              }
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-5 max-sm:justify-end ">
          <Search size={18} className="cursor-pointer" />

          <div className="flex items-center justify-center gap-3">
            <p className="text-sm font-medium cursor-pointer text-white hover:text-[#da1926]">
              Sign up
            </p>
            <p className="text-sm font-medium cursor-pointer text-white hover:text-[#da1926]">
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
