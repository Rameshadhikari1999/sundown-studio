import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { menu } from "../../assets/contants";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {

  const [disWidth, setDisWidth] = useState(window.innerWidth > 768 ? true : false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setDisWidth(window.innerWidth > 768 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  })

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.fromTo("#mobilNav",
      {
        y: "-100%",
        duration: 0.5,
        ease: "power3.out",
      },
      {
      y:"0%",
      duration: 0.5,
      ease: "power3.out",
    })
    .to("#mobileNavItem li",{
      opacity: 1,
      x: "0%",
      delay: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "power3.out",
    });
    
    tl.pause();
    if(open){
      tl.play();
    }
    else{
      tl.reverse();
    }
  }, [open]);
  const handleLogoClick = () => {
    navigate("/");
  }
 
  return (
    <nav className="relative w-full flex items-center justify-between px-5 py-8">
      <img onClick={handleLogoClick} className="w-1/3 lg:w-[10%] cursor-pointer" src={logo} alt="logo" />

      {disWidth && <ul className="flex gap-3 transition-all">
        {menu.map((item, index) => (
           <li key={index} className="border-[1px] text-gray-800 relative border-gray-400 px-4 py-1 rounded-3xl after:content-[''] after:absolute after:-bottom-[100%] after:left-0 after:w-full after:h-full after:bg-black after:rounded-full after:transition-all after:hover:bottom-0 overflow-hidden cursor-pointer hover:text-white">
           <Link className="relative z-10 font-thin  text-xs" to={`/${item.toLowerCase()}`}>
             {item}
           </Link>
         </li>
        ))}
      </ul>}

      {!disWidth && (
        <div onClick={() => setOpen(!open)} className="border-[1px] text-gray-800 relative border-gray-400 px-4 py-1 rounded-3xl flex items-center gap-1 z-20">
         {open ? <IoMdClose className="text-3xl" /> : <HiMenuAlt4 className="text-3xl" />}
          Menu
        </div>
      )}
      <div id="mobilNav" className="w-full h-screen bg-black/80 absolute top-0 left-0 z-10 transition-all">
        <div className="w-full h-2/3 bg-[#EFEAE3] rounded-b-3xl rounded-bl-3xl">
                  <ul id="mobileNavItem" className="w-full h-full flex flex-col justify-center items-end">
                    {menu.map((item, index) => (
                      <li key={index} className="text-gray-800 text-[60px] leading-none font-thin cursor-pointer hover:text-white translate-x-[20%] opacity-0">
                        <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                      </li>))}
                  </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
