import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 cursor-pointer">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="border px-4 py-1 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all ease-in-out duration-200">
                <a 
                  className=""
                  href={item.href}>{item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#_" className="relative inline-flex items-center justify-center py-2 px-3 border overflow-hidden text-white transition duration-300 ease-out rounded-md shadow-xl group hover:ring-white">
              <span className="absolute bottom-0 right-0 block w-full h-full transition duration-300 rounded-md -z-20 bg-white -translate-x-[100%] group-hover:-translate-x-[0%] ease-in-out"></span>
              <span className="group-hover:text-black transition-all">Sign In</span>
            </a>
            <a href="#_" className="relative inline-flex items-center justify-center min-h-s[200px] py-2 px-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-white">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-orange-800 -z-20"></span>
              <span className="absolute bottom-0 right-0 block w-full h-full transition duration-300 origin-left -z-20 transform bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 opacity-70 -translate-x-[100%] group-hover:-translate-x-[0%] ease-in-out"></span>
              <span className="relative text-white">Create an account</span>
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className=" fixed right-0 z-20 bg-neutral-900 w-full gap-8 flex flex-col justify-center items-center lg:hidden">
            <ul className=" flex flex-col justify-center items-center mt-8 px-8 gap-4 w-full">
              {navItems.map((item, index) => (
                <li key={index} className="border w-full flex justify-center items-center py-1 rounded-md cursor-pointer hover:bg-white hover:text-black transition-all ease-in-out duration-300">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mb-8">
              <a href="#_" className="relative inline-flex items-center justify-center py-2 px-3 border overflow-hidden text-white transition duration-300 ease-out rounded-md shadow-xl group hover:ring-white">
                <span className="absolute bottom-0 right-0 block w-full h-full transition duration-300 rounded-md -z-20 bg-white -translate-x-[100%] group-hover:-translate-x-[0%] ease-in-out"></span>
                <span className="group-hover:text-black transition-all">Sign In</span>
              </a>
              <a href="#_" className="relative inline-flex items-center justify-center px-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-white">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-orange-800 -z-20"></span>
                <span className="absolute bottom-0 right-0 block w-full h-full transition duration-300 origin-left -z-20 transform bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 opacity-70 -translate-x-[100%] group-hover:-translate-x-[0%] ease-in-out"></span>
                <span className="relative text-white">Create an account</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

