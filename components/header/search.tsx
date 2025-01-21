import React from "react";
import searchIcon from "@/public/search.svg";

const Search: React.FC = () => {
  return (
    <>
      <input
        type="text"
        className={`search-input dark:bg-dark-150 dark:border-dark-50 max-h-10 w-full rounded-full border border-[#e5e5e5] bg-[#000]/5 bg-left bg-no-repeat p-3 pl-10 text-sm font-normal text-[#737373] dark:text-white`}
        placeholder="Search ai agents..."
        style={{
          backgroundImage: `url(${searchIcon.src})`,
          backgroundPosition: "1rem",
        }}
      />
    </>
  );
};
export default Search;
