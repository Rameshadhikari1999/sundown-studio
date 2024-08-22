import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { brands } from "../../../assets/contants";

const Brands = () => {
  return (
    <div className="w-full h-screen px-5 py-10">
      <Swiper
        slidesPerView={ window.innerWidth < 768 ? 1 : 3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode]}
        className="w-full h-2/3"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className=" border-l-2 border-gray-50">
            <div className="w-3/4" style={{ backgroundColor: "#EFEAE3", padding: "10px" }}>
              <img
                className="w-full"
                style={{
                  objectFit: "contain",
                  aspectRatio: "3 / 2",
                  mixBlendMode: "color-burn",
                }}
                src={brand.image}
                alt="brand"
              />
            </div>
            <p className="py-2 px-5 text-lg font-sans text-gray-700">{brand.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
