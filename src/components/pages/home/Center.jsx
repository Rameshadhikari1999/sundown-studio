import React, { useRef } from "react";
import centerImage from "../../../assets/images/center.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Center = () => {
    const ball1Ref = useRef();
    const ball2Ref = useRef();
    useGSAP(() => {
        let tl = gsap.timeline({repeat: -1, yoyo: true});

        tl.to(ball1Ref.current,{
                x: "20%",
                y: "-10%",
                duration: 5,
                skewX: 10,
                skewY: 10,
                ease: "power3.out",
        })
    })
  return (
    <div className=" w-full h-[90vh] py-5 lg:pt-0">
      <div className="relative h-full w-full flex items-center flex-col lg:flex-row justify-between">
        <div className="z-10">
          <h3 className=" w-full lg:w-3/4 text-2xl md:text-4xl md:mt-10 lg:text-6xl text-black pl-3 lg:pl-10 md:px-10">
            We are a group of design-driven, goal-focused creators, producers,
            and designers who believe that the details make all the difference.
          </h3>
        </div>
        <div className="z-10 w-[80%] lg:w-[60%] mx-auto">
          <img
            className=" lg:w-[90%] pt-20 rounded "
            src={centerImage}
            alt="image"
          />
          <p className="lg:w-full text-sm font-thin my-2 px-1 md:mr-10">
            We love to create, we love to solve, we love to collaborate, and we
            love to turn amazing ideas into reality. We’re here to partner with
            you through every step of the process and know that relationships
            are the most important things we build.
          </p>
        </div>
      <div className="w-full h-1/2  absolute left-0 top-[20vh] z-[1] ">
      <div ref={ball1Ref} className="absolute top-[20%] left-[30%] w-96 h-96 rounded-full bg-[#FE360B] blur-xl"></div>
      {/* <div ref={ball2Ref} className="absolute top-[25%] left-[40%] w-40 h-40 rounded-full bg-red-500"></div> */}
      </div>
      </div>
    </div>
  );
};

export default Center;
