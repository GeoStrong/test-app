"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import HeaderMobile from "./header-mobile";

const Header: React.FC = () => {
  const { systemTheme, setTheme } = useTheme();

  useEffect(() => {
    if (systemTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <HeaderMobile />
    </div>
  );
};
export default Header;
