"use client";
import { useTheme } from "next-themes";
import React from "react";

const MenuIcon: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.66663 17H28.3333"
          stroke={`${theme === "dark" ? "white" : "black"}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.66663 8.5H28.3333"
          stroke={`${theme === "dark" ? "white" : "black"}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.66663 25.5H28.3333"
          stroke={`${theme === "dark" ? "white" : "black"}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default MenuIcon;
