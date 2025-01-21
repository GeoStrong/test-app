"use client";

import { BsCommand } from "react-icons/bs";
import React, { useEffect, useRef } from "react";
import searchIcon from "@/public/assets/search.svg";

const HeaderSearch: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const keyDownHandler = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      searchRef.current?.focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
  });

  return (
    <div className="relative w-full">
      <input
        ref={searchRef}
        type="text"
        className={`search-input dark:bg-dark-150 dark:border-dark-50 max-h-10 w-full rounded-full border border-[#e5e5e5] bg-[#000]/5 bg-left bg-no-repeat p-3 pl-10 text-sm font-normal text-[#737373] dark:text-white md:min-w-[22rem]`}
        placeholder="Search ai agents..."
        style={{
          backgroundImage: `url(${searchIcon.src})`,
          backgroundPosition: "1rem",
        }}
      />
      <div className="dark:bg-dark-100 dark:border-dark-50 absolute right-4 top-2 hidden items-center justify-center gap-1 rounded-sm border border-[#e5e5e5] bg-[#f5f5f5] px-2 text-sm text-[#737373] md:flex">
        <BsCommand className="text-[9px]" />
        <span className="block pb-[1px] text-sm font-semibold">K</span>
      </div>
    </div>
  );
};
export default HeaderSearch;
