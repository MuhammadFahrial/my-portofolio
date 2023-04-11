import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Portofolio() {
  const location = useLocation();

  return (
    <>
      <div className="portofolio mt-12 mb-12">
        <div className="header">
          <h1
            className="text-[28px] xl:text-[38px] font-bold
            "
          >
            My Portofolio |
          </h1>

          <div className="xl:flex justify-between items-center">
            <div className="left-side">
              <p className=" xl:w-[600px] text-[16px] font-light mb-8">
                Thank you for visiting our portfolio page. We hope our works can
                inspire and assist you in achieving your goals.
              </p>
            </div>
            <div className="right-side flex gap-1 text-[14px]">
              <NavLink
                to="web"
                className="border-solid bg-[#00E0FF] text-[#000] px-5 py-1"
              >
                Web
              </NavLink>
              <NavLink
                to="ui/ux"
                className="border-solid bg-[#00E0FF] text-[#000] px-5 py-1"
              >
                UI/UX
              </NavLink>
              <NavLink
                to="3d-design"
                className="border-solid bg-[#00E0FF] text-[#000] px-5 py-1"
              >
                3D Design
              </NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      {/* Nested route */}
      {location.pathname === "/web" && <Outlet />}
    </>
  );
}
