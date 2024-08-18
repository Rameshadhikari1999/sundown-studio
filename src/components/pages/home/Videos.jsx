import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

const Videos = ({ video, title, subTitle,  videoContainer }) => {

    useGSAP(() => {
        gsap.to('#project-title', {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#project-title',
            start: 'top 80%',
            end: 'bottom top',
            scrub: 2,
          },
        })
    })
 
  return (
    <Link to="#"
      ref={videoContainer}
      className="relative main-video-container  w-full md:w-1/2 md:h-[60vh] h-[90vh] lg:h-[8%] pt-5 px-3 lg:w-full lg:border-b-[1px] border-gray-400 cursor-pointer lg:overflow-hidden lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:top-[-100%] lg:after:z-10  lg:after:w-full lg:after:h-full lg:after:bg-[#FF9831] lg:hover:after:top-0 lg:after:transition-all flex-grow"
    >
      <video
        className="w-full h-3/4 rounded-2xl object-cover lg:hidden"
        loop
        autoPlay
        muted
        src={video}
      ></video>
      <div  id="project-title" className="w-full px-5 pt-4 lg:py-1 lg:flex lg:justify-between lg:items-center z-20 relative translate-y-[40%] opacity-0">
        <h3 className="w-full text-3xl lg:text-5xl text-gray-950 uppercase font-neo font-extrabold cursor-pointer">
          {title}
        </h3>
        <div>
          <p className=" w-full text-xl font-sans text-gray-950 capitalize py-1">
            {subTitle}
          </p>
          <p className="w-full text-sm  font-sans text-gray-500 capitalize">
            Environment
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Videos;
