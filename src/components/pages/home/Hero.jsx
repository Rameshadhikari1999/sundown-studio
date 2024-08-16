import React from "react";
import video from "../../../assets/videos/video1.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { scrollText } from "../../../assets/contants";
const Hero = () => {
  useGSAP(() => {
    let tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(".con", { x: 0 }, { x: "-100%", duration: 10, ease: "none" });
  });
  return (
    <div className="w-full relative px-4 py-5">
      <div className="w-full h-[60vh] lg:h-[80vh] border-b-[1px] flex-col-reverse lg:flex-row border-gray-400 flex items-end justify-between ">
        <div className="">
          <p className="w-2/3 text-2xl leading-7 font-extrabold py-2">
            Sundown is a multi-disciplinary studio focused on creating unique,
            end-to-end experiences and environments.
          </p>
        </div>
        <div>
          <h2 className="text-[60px] md:text-[120px] lg:text-[150px] leading-[90%] uppercase text-right">
            spaces that inspire
          </h2>
        </div>
      </div>
      <div className="w-1/3 h-1/3 bg-[#FE360B] absolute right-0 top-[58vh] lg:top-[78vh] rounded-s-full blur-lg">
        <div className="absolute" id="gola"></div>
        <div className="absolute" id="gola1"></div>
      </div>
      <div className="w-full mt-10 relative">
        <video
          src={video}
          className="w-full rounded"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div
        id="scroll"
        className="w-full overflow-x-auto  whitespace-nowrap py-10"
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className=" con whitespace-nowrap inline-block">
            {scrollText.map((item, index) => (
              <p
                key={index}
                className="text-[40px] lg:text-[100px] inline-block px-4 uppercase"
              >
                {item}
                <span className="w-5 h-5 lg:w-10 lg:h-10 bg-[#FE360B] inline-block rounded-full my-1 lg:my-4 mx-2 lg:mx-5"></span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
