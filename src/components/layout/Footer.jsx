import { useEffect, useRef } from "react";
import { TbWorld } from "react-icons/tb";
import { menu } from "../../assets/contants";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // let bolls = useRef();
  let pathRef = useRef();

  const minMaxNummber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    setInterval(() => {
      let ranNumber = 2000;
      ranNumber = minMaxNummber(2000, 3000);
      pathRef.current.setAttribute("d", `M 0 0 Q  ${ranNumber} 700 1400 0`);

      // console.log(ranNumber)
      // console.log(minMaxNummber(700,900), "function")
    }, 5000);
    // console.log(ranNumber);
    // console.log(pathRef.current)
  });

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  }
  return (
    <div className=" w-full h-[100vh] fixed bottom-0 z-0  bg-[#FE340A] text-white">
      <div className="relative w-full h-full flex flex-col items-center justify-end pt-5 leading-none">
        {/* <div className="w-full h-1/4 bg-blue-500 flex items-center justify-between px-5 z-20">
        <ul className="ml-5 text-5xl font-bold leading-none">
          {menu.map((item, index) => (
            <li className="capitalize cursor-pointer" onClick={() => handleNavigate(item)} key={index}>{item}
            </li>
          ))}
        </ul>
        <div>
        <p>Get industry insights and creative inspiration straight to your inbox.</p>
        <input type="text" />
        </div>
        </div> */}
        <h1 className="text-[23vw] text-center border-b-[1px] border-white">
          Sundown
        </h1>
        <div className="w-full flex items-center flex-wrap justify-between text-white px-7 py-5 text-sm">
          <p>Copyright © Sundown Studio</p>
          <p className="inline-flex gap-1 items-center">
            <TbWorld size={20} />
            Brooklyn, NY
          </p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>
        <div
          id="bolls"
          className="absolute left-0 w-full z-[-1] h-[80%]   flex gap-0 "
        >
          <svg width={"100%"} height={"100%"} className=" rotate-180">
            <path
              className=" bg-black transition-all duration-500"
              ref={pathRef}
              d="M 0 800 Q 2000 800 1400 0"
              stroke=""
              fill=""
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
