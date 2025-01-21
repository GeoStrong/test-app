import React from "react";
import MainCard from "./main-card";
import Image from "next/image";
import verifiedIcon from "@/public/assets/verified-icon.svg";
import userIconFirst from "@/public/assets/user-1.png";
import userIconSecond from "@/public/assets/user-2.png";
import userIconThird from "@/public/assets/user-3.png";

const MainHead: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-7 md:flex-row md:items-start md:justify-between md:gap-10">
      <div className="w-full text-center md:text-left">
        <h1 className="flex flex-col text-[40px] font-bold leading-tight text-[#0a0a0a] dark:text-white md:text-6xl">
          <span>Buy Memes.</span>
          <span>In Two Clicks.</span>
        </h1>
        <p className="mt-2 text-sm text-[#0a0a0a] dark:text-white md:text-2xl">
          <span>The fastest way to buy memes in just two clicks.</span>
          <span className="block">
            Under 1 minute to sign up and no wallet needed
          </span>
        </p>
        <div className="mt-6 hidden w-full items-center justify-between gap-4 md:flex">
          <div className="dark:bg-dark-150 w-full rounded-xl bg-[#f5f5f5] p-4 text-[#0a0a0a] dark:text-white">
            <p className="flex items-center gap-2 text-sm font-normal">
              <span className="block h-2 w-2 rounded-full bg-[#22c55e]"></span>
              <span>Total users</span>
            </p>
            <div className="mt-2 flex items-center">
              <div className="relative flex items-center">
                <Image
                  className="rounded-full border-2 border-black"
                  src={userIconFirst.src}
                  width={24}
                  height={24}
                  alt="user"
                />
                <Image
                  className="absolute left-4 rounded-full border-2 border-black"
                  src={userIconSecond.src}
                  width={24}
                  height={24}
                  alt="user"
                />
                <Image
                  className="absolute left-8 rounded-full border-2 border-black"
                  src={userIconThird.src}
                  width={24}
                  height={24}
                  alt="user"
                />
              </div>
              <p className="pl-10 text-2xl font-medium">52,630</p>
            </div>
          </div>
          <div className="dark:bg-dark-150 w-full rounded-xl bg-[#f5f5f5] p-4 text-[#0a0a0a] dark:text-white">
            <p className="flex items-center gap-2 text-sm font-normal">
              <span className="block h-2 w-2 rounded-full bg-[#22c55e]"></span>
              <span>Trade Volume</span>
            </p>
            <div className="mt-2">
              <p className="text-2xl font-medium">$ 1,288,314,266</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12">
        <MainCard
          price={2.74}
          marketCap="1.74B"
          number={0.59}
          isProfit
          isCardMain
        >
          <div className="relative h-48 w-full rounded-t-xl bg-[#c25353]">
            <Image
              className="absolute right-2 top-2"
              src={verifiedIcon.src}
              width={70}
              height={70}
              alt="verified"
            />
          </div>
        </MainCard>
      </div>
    </div>
  );
};
export default MainHead;
