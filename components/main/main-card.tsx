import React from "react";
import Image from "next/image";
import { BsFillTriangleFill } from "react-icons/bs";
import verifiedIcon from "@/public/assets/verified-icon.svg";
import { MainCardProps } from "./main";

const MainCard: React.FC<MainCardProps> = ({
  children,
  isCardMain,
  verified,
  name,
  number,
  isProfit,
  price,
  marketCap,
}) => {
  return (
    <>
      <div className="w-full transform cursor-pointer transition-all duration-300 hover:scale-105">
        {children}
        <div className="dark:bg-dark-150 flex h-36 flex-col gap-1 rounded-b-xl bg-white p-4 shadow">
          <div className="flex h-10 w-full items-center justify-between font-semibold xl:pr-5">
            <h3
              className={`${isCardMain ? "text-xl" : "text-base"} flex items-center`}
            >
              {name.toUpperCase()}
              {verified && (
                <Image
                  src={verifiedIcon.src}
                  width={40}
                  height={40}
                  alt="verified"
                />
              )}
            </h3>
            {number && (
              <p
                className={`flex items-center gap-2 text-base ${isProfit ? "text-[#2ac02f]" : "text-[#e73a3a]"}`}
              >
                <span>
                  {isProfit ? (
                    <BsFillTriangleFill />
                  ) : (
                    <BsFillTriangleFill className="rotate-180 transform" />
                  )}
                </span>
                {number}%
              </p>
            )}
          </div>
          <div className="flex w-full items-center justify-between font-semibold xl:pr-5">
            <p className="">
              <span className="text-sm font-normal text-[#545454] dark:text-white">
                Price
              </span>
              <span className="block text-base font-semibold">${price}</span>
            </p>
            <p className="">
              <span className="text-sm font-normal text-[#545454] dark:text-white">
                Market Cap
              </span>
              <span className="block text-base font-semibold">
                ${marketCap}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainCard;
