import React from "react";
import MainHead from "./main-head";
import MainBody from "./main-body";
import { StaticImageData } from "next/image";
import MainFooter from "./main-footer";

export interface MainCardProps {
  children?: React.ReactNode;
  price: number | string;
  marketCap: number | string;
  name: string;
  number?: number | string;
  isProfit?: boolean;
  verified?: boolean;
  isCardMain?: boolean;
}

export interface CardOptionsType extends MainCardProps {
  image: StaticImageData | string;
}

const Main: React.FC = () => {
  return (
    <div className="px-9 pt-7 md:px-20 md:py-24 2xl:md:px-36">
      <MainHead />
      <MainBody />
      <MainFooter />
    </div>
  );
};
export default Main;
