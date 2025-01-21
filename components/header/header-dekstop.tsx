import Image from "next/image";
import React from "react";
import logoImg from "@/public/assets/logo.svg";
import Search from "./header-search";
import { Button } from "../ui/button";
import Socials from "./header-socials";

const HeaderDesktop: React.FC = () => {
  return (
    <div className="hidden items-center justify-between p-7 md:flex">
      <div className="dark:bg-dark-150 rounded-md p-2">
        <Image src={logoImg.src} alt="logo" width={129} height={23} />
      </div>
      <div className="">
        <Search />
      </div>
      <div className="flex items-center gap-2">
        <Socials />
        <Button className="dark:bg-dark-150 w-full rounded-sm p-6 text-base text-white">
          Start Buying
        </Button>
      </div>
    </div>
  );
};
export default HeaderDesktop;
