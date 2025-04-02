import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { maidaanMainLogo } from "@/assets";
import { reset } from "@/store/counterSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(reset());
  }, []);

  return (
    <nav className="bg-[#00000099] sticky top-0 z-50 ">
      <div className="px-6 mx-auto w-full flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <NavLink to="">
            <img src={maidaanMainLogo} alt="Logo" className="h-16" />
          </NavLink>
        </div>

        {/* Center Links for Large Screens */}
        {count == 0 ? (
          <div className="hidden lg:flex items-center border border-white rounded-3xl gap-4 px-4 py-2">
            <NavLink
              to=""
              className={({ isActive }) =>
                `hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${
                  isActive ? "text-[#CEF23F] bg-[#FFFFFF15]" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="tournaments"
              className={({ isActive }) =>
                `hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${
                  isActive ? "text-[#CEF23F] bg-[#FFFFFF15]" : "text-white"
                }`
              }
            >
              Tournaments
            </NavLink>
            <NavLink
              to="events"
              className={({ isActive }) =>
                `hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${
                  isActive ? "text-[#CEF23F] bg-[#FFFFFF15]" : "text-white"
                }`
              }
            >
              Events
            </NavLink>
            <NavLink
              to="academies"
              className={({ isActive }) =>
                `hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${
                  isActive ? "text-[#CEF23F] bg-[#FFFFFF15]" : "text-white"
                }`
              }
            >
              Academies
            </NavLink>
            <NavLink
              to="schemes"
              className={({ isActive }) =>
                `hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${
                  isActive ? "text-[#CEF23F] bg-[#FFFFFF15]" : "text-white"
                }`
              }
            >
              Schemes
            </NavLink>
          </div>
        ) : null}
        {/* Right side buttons for Large Screens */}
        {count == 0 ? (
          <div className="lg:flex items-center space-x-3 hidden">
            <NavLink to={'host'} className="bg-transparent text-[#CEF23F] hover:text-lime-500 font-light px-4 py-2 rounded-full text-sm ">
              Host an Event
            </NavLink>
            <NavLink to={'signin'} className="bg-[#CEF23F] hover:bg-lime-500 text-black px-4 py-2 rounded-full text-sm font-light">
              Sign in
            </NavLink>
          </div>
        ) : null}

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-in effect) */}
      {count == 0 ? (
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#000000a5] z-50 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="bg-[#111111] w-64 h-full p-5">
            <div className="flex justify-between items-center mb-8">
              <NavLink to="" onClick={toggleMenu}>
                <img src={maidaanMainLogo} alt="Logo" className="h-12" />
              </NavLink>
              <button onClick={toggleMenu} className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <NavLink
              to=""
              className={({ isActive }) =>
                `block  hover:bg-[#FFFFFF15] py-2 px-2 rounded-lg text-sm font-light ${
                  isActive ? "bg-[#CEF23F] text-black" : "text-white"
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="tournaments"
              className={({ isActive }) =>
                `block  hover:bg-[#FFFFFF15] py-2 px-2 rounded-lg text-sm font-light ${
                  isActive ? "bg-[#CEF23F] text-black" : "text-white"
                }`
              }
              onClick={toggleMenu}
            >
              Tournaments
            </NavLink>
            <NavLink
              to="events"
              className={({ isActive }) =>
                `block  hover:bg-[#FFFFFF15] py-2 px-2 rounded-lg text-sm font-light ${
                  isActive ? "bg-[#CEF23F] text-black" : "text-white"
                }`
              }
              onClick={toggleMenu}
            >
              Events
            </NavLink>
            <NavLink
              to="academies"
              className={({ isActive }) =>
                `block  hover:bg-[#FFFFFF15] py-2 px-2 rounded-lg text-sm font-light ${
                  isActive ? "bg-[#CEF23F] text-black" : "text-white"
                }`
              }
              onClick={toggleMenu}
            >
              Academies
            </NavLink>
            <NavLink
              to="schemes"
              className={({ isActive }) =>
                `block hover:bg-[#FFFFFF15] py-2 px-2 rounded-lg text-sm font-light ${
                  isActive ? "bg-[#CEF23F] text-black" : "text-white"
                }`
              }
              onClick={toggleMenu}
            >
              Schemes
            </NavLink>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
