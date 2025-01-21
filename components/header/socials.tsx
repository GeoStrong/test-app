"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import TelegramIcon from "@/public/SVG components/telegramIcon";
import TwitterIcon from "@/public/SVG components/twitterIcon";
import ThemeIcon from "@/public/SVG components/themeIcon";

const Socials: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-around gap-2">
      <Link href="/">
        <TwitterIcon />
      </Link>
      <Link href="/">
        <TelegramIcon />
      </Link>
      <ThemeIcon
        clickHanlder={() =>
          theme == "dark" ? setTheme("light") : setTheme("dark")
        }
      />
    </div>
  );
};
export default Socials;
