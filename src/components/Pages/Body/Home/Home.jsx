import React from "react";
import pic from "../../../../assets/home-pic.png";
import facebook from "../../../../assets/facebook.png";
import instagram from "../../../../assets/instagram.png";
import github from "../../../../assets/github.png";
import linkedin from "../../../../assets/linkedin.png";
import { NavLink } from "react-router-dom";

// import Our Service
import webDev from "../../../../assets/web-dev.png";
import webDesign from "../../../../assets/web-design.png";
import vidEdit from "../../../../assets/video-editing.png";

export default function Home() {
  return (
    <>
      <div className="home my-8 xl:flex justify-between items-center h-full xl:my-32">
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
          <div className="mt-4 flex gap-1 xl:absolute xl:bottom-[32px] xl:mb-12">
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
              <img src={github} alt="" />
            </a>
          </div>
        </div>

        <div className="right-side pt-10 flex justify-center xl:justify-normal xl:pt-0  ">
          <img src={pic} className="xl:w-[28rem] w-[26rem]" />
        </div>
      </div>
      <div className="xl:border-2 xl:px-10 py-6 mb-8 rounded-xl">
        <h1 className="text-center text-[28px] xl:text-[38px] font-bold">
          Our <span className="text-[#00E0FF]">Services</span>
        </h1>
        <p className="text-center text-[16px] py-4 xl:text-[16px] xl:px-40 font-light">
          I am a dedicated individual committed to providing top-notch services
          to my clients.
        </p>
        <div className="flex justify-center flex-wrap gap-8">
          <div className="web-dev px-4 py-6 bg-[#0B2345] xl:w-1/5 text-center">
            <img src={webDev} alt="" className="pb-4 block mr-auto ml-auto" />
            <h1>Web Development</h1>
            <p className="text-[14px] font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              error odio optio.
            </p>
          </div>
          <div className="web-design px-4 py-6 bg-[#0B2345] xl:w-1/5 text-center">
            <img
              src={webDesign}
              alt=""
              className="pb-4 block mr-auto ml-auto"
            />
            <h1>Web Design</h1>
            <p className="text-[14px] font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              error odio optio.
            </p>
          </div>
          <div className="video-editing px-4 py-6 bg-[#0B2345] xl:w-1/5 text-center">
            <img src={vidEdit} alt="" className="pb-4 block mr-auto ml-auto" />
            <h1>Video Editing</h1>
            <p className="text-[14px] font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              error odio optio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
