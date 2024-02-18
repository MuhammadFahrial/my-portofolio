import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [changeColor, setChangeColor] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const changeBackgroundColor = () => {
      if (window.scrollY > 10) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <>
      <div
        className={`navbar ${
          changeColor ? "bg-[#390a65] border-b border-slate-600" : ""
        }`}
      >
        <div className="px-[10%]">
          <nav className="flex items-center justify-between flex-wrap py-4">
            <div className="flex items-center flex-shrink-0 mr-6">
              <h1 className=" text-[22px] font-semibold">
                Porto<span className="text-[#00E0FF]">folio.</span>
              </h1>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={handleMenuToggle}
                className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-blue-500 hover:border-blue-500 focus:outline-none"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path
                    d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`w-full ${
                isMenuOpen ? "block" : "hidden"
              } lg:flex lg:items-center lg:w-auto`}
            >
              <div className="text-sm lg:flex ">
                <NavLink
                  to="/"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#00E0FF] mr-4"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/portofolio/web"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#00E0FF] mr-4"
                >
                  Portofolio
                </NavLink>

                <NavLink
                  to="/contact"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#00E0FF] mr-4"
                >
                  Contact
                </NavLink>
              </div>
              <a
                download
                href="https://drive.google.com/file/d/1VPtmgwYVlSTmA7oVNDNT7HOgwSdiylIh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-black bg-[#ffffff] block mt-4 lg:inline-block lg:mt-0 hover:bg-[#00E0FF] mr-4 text-sm rounded-sm"
              >
                Download CV
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
