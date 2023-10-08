import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="mx-[10%]">
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
              {/* <NavLink
            to="/about"
            activeClassName="text-blue-500 border-b-2 border-blue-500 pb-2"
            exact
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#00E0FF] mr-4"
          >
            About
          </NavLink> */}
              <NavLink
                to="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#00E0FF] mr-4"
              >
                Contact
              </NavLink>
            </div>
            <a
              download
              href="https://drive.google.com/file/d/1WEZouW0L8Gg4gtCsdWzeuKiioLVVcnOB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black bg-[#ffffff] block mt-4 lg:inline-block lg:mt-0 hover:bg-[#00E0FF] mr-4 text-sm rounded-sm"
            >
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div className="flex justify-between py-4 ">
//       <div className="Logo">
//         <h1 className=" text-[22px] font-semibold">
//           Porto<span className="text-[#00E0FF]">folio.</span>
//         </h1>
//       </div>
//       <div className="flex justify-between gap-8 items-center font-normal text-[16px] ">
//         <NavLink to="/" className="hover:text-[#00E0FF]">
//           Home
//         </NavLink>
//         <NavLink to="/portofolio" className="hover:text-[#00E0FF]">
//           Portofolio
//         </NavLink>
//         <NavLink to="/about" className="hover:text-[#00E0FF]">
//           About
//         </NavLink>
//         <NavLink to="/contact" className="hover:text-[#00E0FF]">
//           Contact
//         </NavLink>
//       </div>
//     </div>
//   );
// }
