import React from "react";
import pic from "../../../../assets/home-pic.png";
import facebook from "../../../../assets/facebook.png";
import instagram from "../../../../assets/instagram.png";
import github from "../../../../assets/github.png";
import linkedin from "../../../../assets/linkedin.png";
import { NavLink } from "react-router-dom";
import iweb from "../../../../assets/home1.png";
import iux from "../../../../assets/home2.png";
import i3d from "../../../../assets/home3.png";
import motion from "../../../../assets/Motion/CV.mp4";

// import Our Service
import webDev from "../../../../assets/web-dev.png";
import webDesign from "../../../../assets/web-design.png";
import vidEdit from "../../../../assets/video-editing.png";
import object from "../../../../assets/3D-object.png";
import zigzag from "../../../../assets/zigzag.png";
import triangle from "../../../../assets/triangle.png";
import x from "../../../../assets/x.png";
import Contact from "../Contact/Contact";
import Footer from "../../Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="mx-[10%]">
        <div className="home my-8 xl:flex justify-between items-center h-full xl:my-32 ">
          <div className="left-side">
            <div className="xl:leading-none">
              <h1 className="text-[28px] xl:text-[38px] xl:text-left font-bold">
                Muhammad Fahrial
              </h1>
              <h3 className="text-[20px] xl:text-[24px] xl:text-left pb-3 font-bold">
                Front-end <span className="text-[#00E0FF]">Developer</span>
              </h3>
            </div>
            <p className="text-[16px] xl:leading-loose xl:w-[600px] xl:text-left font-light">
              I come from Indonesia and live in South Sulawesi, from childhood
              until now I really like to learn all things related to computers
              such as graphic design, programming etc.
            </p>
            <div className="mt-2 xl:text-left pt-4 xl:pt-0 xl:mt-6">
              <NavLink
                className=" bg-[#00E0FF] text-black px-4 py-2 font-normal rounded-[6px] mt-2 text-[16px]"
                to="/contact"
              >
                Let's Talk
              </NavLink>
            </div>
            <div className="mt-6 flex gap-1 ">
              <a
                href="https://www.linkedin.com/in/a-muh-fahrial-68407a221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="" />
              </a>

              <a
                href="https://www.instagram.com/muhammad_fachrial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={instagram} alt="" />
              </a>

              <a
                href="https://github.com/MuhammadFahrial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" className="" />
              </a>
            </div>
          </div>

          <div className="right-side pt-10 flex justify-center xl:justify-normal xl:pt-0  ">
            <img src={pic} className="xl:w-[28rem] w-[26rem]" />
          </div>
        </div>
        {/* OUR SERVICES START */}
        <div className="pt-8 mb-8 rounded-xl xl:border">
          <h1 className="text-center text-[28px] xl:text-[38px] font-bold">
            Our <span className="text-[#00E0FF]">Services</span>
          </h1>
          <div className="my-auto flex justify-center gap-6">
            <img
              src={zigzag}
              alt=""
              className=" h-8 xl:inline-block m-auto hidden"
            />
            <p className="my-auto text-center text-[16px] xl:text-[16px] font-light py-8">
              I am a dedicated individual committed to providing top-notch
              services to my clients.
            </p>
            <img
              src={triangle}
              alt=""
              className="xl:inline-block m-auto hidden"
            />
          </div>
          <div className="flex justify-center flex-wrap gap-4 ">
            <div className="web-dev px-6 py-6 bg-[#0B2345] xl:w-1/5 md:w-1/2 hover:bg-[#0e4b53] rounded-lg">
              <img src={webDev} alt="" className="pb-4" />
              <h1 className="text-[18px]">Web Development</h1>
              <p className="text-[14px] font-light pt-2">
                Ability to create responsive websites using HTML, CSS,
                JavaScript, ReactJS and PHP.
              </p>
            </div>
            <div className="web-design px-6 py-6 bg-[#0B2345] xl:w-1/5 md:w-1/3 hover:bg-[#0e4b53] rounded-lg">
              <img src={webDesign} alt="" className="pb-4" />
              <h1 className="text-[18px]">UI / UX</h1>
              <p className="text-[14px] font-light pt-2">
                Ability to design illustrations and UI/UX using Adobe
                Illustrator, Photoshop and Figma.
              </p>
            </div>
            <div className="video-editing px-6 py-6 bg-[#0B2345] xl:w-1/5 md:w-1/3 hover:bg-[#0e4b53] rounded-lg">
              <img src={vidEdit} alt="" className="pb-4" />
              <h1 className="text-[18px]">Motion Graphic</h1>
              <p className="text-[14px] font-light pt-2">
                Ability to create 2D Text and Graphic Animation Visual Effects
                using the Adobe After Effects application.
              </p>
            </div>
            <div className="video-editing px-6 py-6 bg-[#0B2345] xl:w-1/5 md:w-1/2 hover:bg-[#0e4b53] rounded-lg">
              <img src={object} alt="" className="pb-4" />
              <h1 className="text-[18px]">3D Modeling</h1>
              <p className="text-[14px] font-light pt-2">
                Ability to create 3D models and add textures to these models
                using the Blender application.
              </p>
            </div>
          </div>

          <img src={x} alt="" className=" xl:block mx-auto hidden py-8" />
        </div>
        {/* OUR SERVICES END */}

        {/* PORTOFOLIO START */}
        <div className="xl:flex items-center xl:py-36 gap-10">
          <div>
            <h1 className="text-[28px] xl:text-[38px] font-bold">
              Web <span className="text-[#FF9F1C]">Development</span>
            </h1>
            {/* <h1 className="text-[28px] xl:text-[38px] font-bold">Present</h1> */}
            <p className="text-[14px] font-light py-2">
              Ability to create responsive websites using HTML, CSS, JavaScript,
              ReactJS and PHP.
            </p>
            <NavLink
              className=" bg-[#00E0FF] text-black px-4 py-2 font-normal rounded-[24px] text-[16px] inline-block mt-4"
              to="/portofolio/web"
            >
              Get Started
            </NavLink>
          </div>
          <img src={iweb} alt="" className="mb-16 mt-8" />
        </div>

        <div className="xl:flex xl:flex-row-reverse items-center gap-10">
          <div>
            <h1 className="text-[28px] xl:text-[38px] font-bold">
              UI / UX <span className="text-[#00E0FF]">Design</span>
            </h1>
            {/* <h1 className="text-[28px] xl:text-[38px] font-bold">Present</h1> */}
            <p className="text-[14px] font-light py-2">
              Ability to design illustrations and UI/UX using Adobe Illustrator,
              Photoshop and Figma.
            </p>
            <NavLink
              className=" bg-[#00E0FF] text-black px-4 py-2 font-normal rounded-[24px] text-[16px] inline-block mt-4"
              to="/portofolio/ui/ux"
            >
              `` Get Started
            </NavLink>
          </div>
          <img src={iux} alt="" className="mb-16 mt-8" />
        </div>

        <div className="xl:flex items-center xl:py-36 gap-10">
          <div>
            <h1 className="text-[28px] xl:text-[38px] font-bold">
              3D <span className="text-[#B0413C]">Modelling</span>
            </h1>
            {/* <h1 className="text-[28px] xl:text-[38px] font-bold">Present</h1> */}
            <p className="text-[14px] font-light py-2">
              Ability to create 3D models and add textures to these models using
              the Blender application.
            </p>
            <NavLink
              className=" bg-[#00E0FF] text-black px-4 py-2 font-normal rounded-[24px] text-[16px] inline-block mt-4"
              to="/portofolio/3d-design"
            >
              Get Started
            </NavLink>
          </div>
          <img src={i3d} alt="" className="mb-16 mt-8" />
        </div>

        <div className="xl:flex xl:flex-row-reverse items-center gap-10">
          <div>
            <h1 className="text-[28px] xl:text-[38px] font-bold">
              Motion <span className="text-[#B0413C]">Graphic</span> 2D
            </h1>
            {/* <h1 className="text-[28px] xl:text-[38px] font-bold">Present</h1> */}
            <p className="text-[14px] font-light py-2">
              Ability to create 2D Text and Graphic Animation Visual Effects
              using the Adobe After Effects application.
            </p>
            <NavLink
              className=" bg-[#00E0FF] text-black px-4 py-2 font-normal rounded-[24px] text-[16px] inline-block mt-4"
              to="/portofolio/ui/ux"
            >
              Get Started
            </NavLink>
          </div>
          <video
            src={motion}
            alt=""
            className="xl:w-1/2 mb-16  mt-8"
            controls
          />
        </div>
        {/* PORTOFOLIO END */}
      </div>

      {/* QOUTES START */}
      <div className="xl:mt-44 py-12 border-t border-b bg-white">
        <h1 className="text-center xl:text-[28px] text-black">
          "As far as I'm concerned, I prefer silent vice to ostentatious
          virtue."
        </h1>
        <p className="text-center font-bold pt-4 text-black">
          -Albert Einstein.-
        </p>
      </div>
      {/* QOUTES END */}

      <Contact />

      <Footer />
    </>
  );
}
