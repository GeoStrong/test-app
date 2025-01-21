import { useTheme } from "next-themes";
import React from "react";

const ThemeIcon: React.FC<{ clickHanlder: () => void }> = ({
  clickHanlder,
}) => {
  const { theme } = useTheme();

  return (
    <>
      <svg
        onClick={clickHanlder}
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.75 24.5625V25.8212C14.7501 26.3139 14.6531 26.8017 14.4645 27.2568C14.276 27.7119 13.9996 28.1255 13.6513 28.4737L12.875 29.25H24.125L23.3487 28.4737C23.0004 28.1255 22.724 27.7119 22.5355 27.2568C22.3469 26.8017 22.2499 26.3139 22.25 25.8212V24.5625M29.75 9.5625V21.75C29.75 22.4959 29.4537 23.2113 28.9262 23.7387C28.3988 24.2662 27.6834 24.5625 26.9375 24.5625H10.0625C9.31658 24.5625 8.60121 24.2662 8.07376 23.7387C7.54632 23.2113 7.25 22.4959 7.25 21.75V9.5625M29.75 9.5625C29.75 8.81658 29.4537 8.10121 28.9262 7.57376C28.3988 7.04632 27.6834 6.75 26.9375 6.75H10.0625C9.31658 6.75 8.60121 7.04632 8.07376 7.57376C7.54632 8.10121 7.25 8.81658 7.25 9.5625M29.75 9.5625V18C29.75 18.7459 29.4537 19.4613 28.9262 19.9887C28.3988 20.5162 27.6834 20.8125 26.9375 20.8125H10.0625C9.31658 20.8125 8.60121 20.5162 8.07376 19.9887C7.54632 19.4613 7.25 18.7459 7.25 18V9.5625"
          stroke={`${theme === "dark" ? "white" : "#6A6A6A"}`}
          //   stroke="#6A6A6A"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default ThemeIcon;
