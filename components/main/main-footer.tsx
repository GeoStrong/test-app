"use client";

import React from "react";
import { useWindowSize } from "react-use";
import MainFooterCarousel from "./main-footer-carousel";
import cardBg from "@/public/assets/card-bg.png";

const MainFooter: React.FC = () => {
  const { width } = useWindowSize();
  const isSm = width < 768;

  const options = ["About", "Blog", "Something Else", "TBD"];

  return (
    <div className="mt-8">
      <h2 className="text-dark text-[32px] font-bold">Learn More</h2>
      {isSm ? (
        <MainFooterCarousel options={options} />
      ) : (
        <div className="mt-3 grid w-full grid-cols-2 gap-[14px] lg:grid-cols-4">
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${cardBg.src})`,
              }}
              className="text-dark flex w-full transform cursor-pointer items-center justify-center rounded-xl bg-cover bg-no-repeat py-8 text-[16px] shadow transition-all duration-300 hover:scale-105"
            >
              <p className="text-center text-xl font-bold text-white">
                {option}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MainFooter;
