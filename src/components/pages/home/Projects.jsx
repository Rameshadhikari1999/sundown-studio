import React, { useRef, useEffect, useState } from "react";
import { video1 } from "../../../assets/videos";
import { projectsDetails } from "../../../assets/contants";
import Videos from "./Videos";
import Buttons from "../../../utils/Buttons";
import { MdArrowRightAlt } from "react-icons/md";
import projectImg from "../../../assets/images/projectImg.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

const Projects = () => {
  const videoRef = useRef(null);
  const videoContainer = useRef(null);

  useEffect(() => {
    const mainVideoContainer = document.querySelectorAll(
      ".main-video-container"
    );
    // console.log(mainVideoContainer, "mainVideoContainer");

    const handleMouseOver = (hover, container) => {
      let getVideo = container.querySelector("video");
      let getVideoSrc = getVideo.getAttribute("src");
      console.log(getVideoSrc, "src");
      if (videoRef.current) {
        if (hover === "in") {
          videoRef.current.setAttribute("src", getVideoSrc);
          videoRef.current.style.opacity = "1";
          videoRef.current.style.zIndex = "100%";
        } else {
          videoRef.current.style.opacity = "0";
          videoRef.current.style.zIndex = "0%";
        }
      }
    };

    mainVideoContainer.forEach((container) => {
      container.addEventListener("mouseover", () =>
        handleMouseOver("in", container)
      );
      container.addEventListener("mouseout", () =>
        handleMouseOver("out", container)
      );
    });
  });

  useGSAP(() => {
        gsap.to('#image', {
          scale: 1.2,
          duration: 1,
          scrollTrigger: {
            trigger: "#image",
            scroller: "body",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          }
        })

  })

  return (
    <div className=" relative w-full pb-10">
      <div className="w-full pl-10 flex items-center gap-1">
        <span className="w-3 h-3 rounded-full bg-[#FE330A]"></span>
        <p className=" text-gray-900 text-xs tracking-widest uppercase font-neo font-thin py-5">
          featured projects
        </p>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap flex-col md:flex-row">
        {projectsDetails.map((project) => (
          <Videos
            key={project.id}
            video={project.video}
            title={project.title}
            subTitle={project.subTitle}
            videoRef={videoRef}
            videoContainer={videoContainer}
          />
        ))}
      </div>
      <div className="px-5 py-5  md:px-10 md:pt-10">
        <Buttons title={"All Projects"} icon={MdArrowRightAlt} />
      </div>
      <div className="h-10 lg:w-1/4 lg:h-[70vh]  lg:fixed lg:top-10 lg:left-1/2 lg:z-40">
        <video
          autoPlay
          muted
          loop
          src={video1}
          ref={videoRef}
          className="w-full h-full object-cover rounded-2xl opacity-0"
        ></video>
      </div>

      <div className="md:mt-20 w-[95%] mx-auto h-[100vh] md:h-[50vh] lg:h-[100vh] bg-black flex rounded-2xl flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2  h-full flex flex-col items-center justify-center gap-10 px-14 py-2 ">
          <h1 className="text-[40px] lg:text-[80px] leading-none text-[#504A45] py-3 border-l-2 border-[#504A45] px-4">
            <span className="text-gray-50 border-l-4 border-[#FE330A] mx-[-1.1rem] px-4 pt-[0.5rem]">
              Design
            </span>
            <br /> Project Execution
          </h1>
          <p className="text-white md:text-base text-sm md:pr-10">
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </div>
        <img
          id="image"
          src={projectImg}
          className=" w-full md:w-1/2 h-full rounded-2xl object-cover"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Projects;
