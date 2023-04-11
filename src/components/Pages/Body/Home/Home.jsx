import React from "react";
import pic from "../../../../assets/home-pic.png";
import facebook from "../../../../assets/facebook.png";
import instagram from "../../../../assets/instagram.png";
import github from "../../../../assets/github.png";

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
          <div className="xl:text-left pt-4 xl:pt-0">
            <button className=" bg-[#00E0FF] text-black px-4 py-2 font-normal rounded-[6px] mt-2 text-[16px] ">
              Our Services
            </button>
          </div>
          <div className="mt-4 flex gap-1 xl:absolute xl:bottom-[32px]">
            <a href="">
              <img src={facebook} alt="" />
            </a>

            <a href="">
              {" "}
              <img src={instagram} alt="" />
            </a>

            <a href="">
              <img src={github} alt="" />
            </a>
          </div>
        </div>

        <div className="right-side pt-10 flex justify-center xl:justify-normal xl:pt-0  ">
          <img src={pic} className="xl:w-[28rem] w-[26rem]" />
        </div>
      </div>
    </>
  );
}
