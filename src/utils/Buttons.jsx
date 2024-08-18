import React from 'react'
// import { Link } from 'react-router-dom'



const Buttons = ({title, icon:Icon}) => {
  return (
    <button className="border-[1px] text-gray-800 relative border-gray-400 px-5 py-1 rounded-3xl after:content-[''] after:absolute after:-bottom-[100%] after:left-0 after:w-full after:h-full after:bg-black after:rounded-full after:transition-all after:duration-300 after:ease-linear after:hover:bottom-0 overflow-hidden cursor-pointer hover:text-white">
    <span className="relative z-10 font-thin flex items-center gap-1 font-sans  text-base">
      {title}
      <Icon size={30}  className="text-base font-thin font-sans pt-1" />
    </span>
  </button>
  )
}

export default Buttons
