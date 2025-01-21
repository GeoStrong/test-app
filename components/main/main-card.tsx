import React from "react";
import Image from "next/image";
import { BsFillTriangleFill } from "react-icons/bs";
import verifiedIcon from "@/public/assets/verified-icon.svg";

interface MainCardProps {
  children: React.ReactNode;
  price: number | string;
  marketCap: number | string;
  number?: number | string;
  isProfit?: boolean;
  verified?: boolean;
  isCardMain?: boolean;
}

const MainCard: React.FC<MainCardProps> = ({
  children,
  isCardMain,
  verified,
  number,
  isProfit,
  price,
  marketCap,
}) => {
  return (
    <>
      <div className="w-full">
        {children}
        <div className="dark:bg-dark-150 flex flex-col gap-1 rounded-b-xl bg-white p-4 shadow">
          <div className="flex w-full items-center justify-between pr-8 font-semibold">
            <h3
              className={`${isCardMain ? "text-xl" : "text-base"} flex items-center`}
            >
              VIRTUAL
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
          <div className="flex w-full items-center justify-between pr-8 font-semibold">
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
