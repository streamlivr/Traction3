import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logoFUll from "../assets/traction3.png"
import { Button } from "./button";
import trIcon from "../assets/tr 1.png"


const NavBar = ( ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full bg-black/60 ${isOpen ? "backdrop-blur-3xl" : "backdrop-blur-xl max-sm:backdrop-blur-3xl"}  flex justify-center items-center fixed z-50 font-barmo`}>
    {/* Navbar */}
    <div className="max-w-7xl w-full relative flex justify-center items-center z-50">
      <nav
        className={`z-50 w-full ${
          isOpen ? "rounded-3xl" : "rounded-lg"
        }`}
      >
        <div className="w-full mx-auto px-4 py-1 md:px-4">
          <div className="flex items-center justify-between h-16" data-aos="fade-down">
            <div className="flex items-center">
              <Link to='/'>
                <div className="flex-shrink-0 flex items-center justify-center gap-1.5">
                  {/* <img className="h-7 md:h-9 w-auto ps-2" src={logoFUll} alt="Logo" /> */}
                  <p className="font-barmo text-4xl max-sm:text-3xl">TRACTION</p>
                  <div>
                    <img src={trIcon} alt="" className="w-8.5 max-sm:w-7" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2 lg:gap-5">
              <div className="flex justify-center items-center gap-2 text-white max-md:hidden">
                <NavLink
                  to="/"
                  className="block px-1 max-lg:text-sm lg:px-3 font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="/features"
                  className="block  px-1 max-lg:text-sm lg:px-3 font-medium"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/whitepaper"
                  className="block  px-1 max-lg:text-sm lg:px-3 font-medium"
                >
                  Portfoilio
                </NavLink>
              </div>
             {/* <Button value='Launch App' onclick={}/> */}
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center cursor-pointer text-white bg-secondary p-2 rounded-lg focus:outline-none md:hidden"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <Button value="Book Call" otherStyles="bg-secondary max-md:hidden max-lg:px-4 max-lg:py-2.5" position="start"/>

            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-primary-900 text-white text-start px-5 pb-5 transition-all duration-300 rounded-b-xl flex justify-center items-center`}
          id="mobile-menu"
        >
          <div className="w-full rounded-2xl space-y-4 py-3">
            <NavLink
              to="/"
              className="block px-3 text-lg font-semibold"
            >
              About
            </NavLink>
            <NavLink
              to="/"
              className="block px-3 text-lg font-semibold"
            >
              Services
            </NavLink>
            <NavLink
              to="/"
              className="block px-3 text-lg font-semibold"
            >
              Portfolio
            </NavLink>
            <Button value="Book call" otherStyles="bg-secondary text-primary-500" position="start"/>
          </div>
        </div>
      </nav>
    </div>
  </div>
  );
};

export default NavBar;
