import Image from "next/image";
import React from "react";
import logoImg from "@/public/logo.svg";

const HeaderDesktop: React.FC = () => {
  return (
    <div className="p-7">
      <div className="dark:rounded-md dark:bg-white dark:p-2">
        <Image src={logoImg.src} alt="logo" width={129} height={23} />
      </div>
    </div>
  );
};
export default HeaderDesktop;
