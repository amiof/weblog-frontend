import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
function Slider() {
  const pic = [
    {
      url: "https://api2.zoomit.ir/media/2021-1-apple-homepod-mini-on-his-hands-638c65b0b37c6251fa712a42?w=1920&q=75",
      title: "test title for testing ",
    },
    {
      url: "https://api2.zoomit.ir/media/2021-6-microsoft-could-kill-off-windows-10-in-2025-638bb4e0e60c0026b82512c0?w=1920&q=75",
      title: "test title 2 for testing ",
    },
    {
      url: "https://api2.zoomit.ir/media/2021-11-surface-laptop-se-1-638bb608da37f663eb45630d?w=1920&q=75",
    },
    {
      url: "https://api2.zoomit.ir/media/2022-1-nft-based-games-638bb6a6b90c494dc77f78a2?w=1920&q=75",
    },
  ];

  const [picNumber, setPicNumber] = useState(0);
  console.log(picNumber, setPicNumber);
  const prevSlide = () => {
    const isFirstSlide = picNumber === 0;
    const numIndex = isFirstSlide ? pic.length - 1 : picNumber - 1;
    setPicNumber(numIndex);
  };

  const nextSlide = () => {
    const isFirstSlide = picNumber === 3;
    const numIndex = isFirstSlide ? 0 : picNumber + 1;
    setPicNumber(numIndex);
  };

  return (
    <div className="h-full transition-all ease-in duration-300 delay-100 ">
      <div
        className="w-full h-full bg-cover bg-center  relative group rounded-2xl transition-all ease-linear duration-300 "
        style={{ backgroundImage: `url(${pic[picNumber].url})` }}
      >
        <div className=" flex justify-between w-full  flex-row absolute top-[50%]  ">
          <div
            className="hidden rounded-full p-2 bg-black/20  text-white cursor-pointer group-hover:block"
            onClick={prevSlide}
          >
            <FiChevronLeft size={30} className="text-white"></FiChevronLeft>
          </div>
          <div
            className="hidden rounded-full p-2 bg-black/20  text-white cursor-pointer group-hover:block "
            onClick={nextSlide}
          >
            <FiChevronRight size={30}></FiChevronRight>
          </div>
        </div>
        <div className="hidden  absolute bottom-0 w-full p-8  bg-white/20 group-hover:block rounded-b-2xl ">
          <p className="text-white font-bold text-center ">{pic[picNumber].title}</p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
