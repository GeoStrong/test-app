import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  const listItems = [
    "About",
    "Blog",
    "Jobs",
    "Press",
    "Accessibility",
    "Partners",
  ];
  return (
    <div className="my-12 flex w-full flex-col items-center justify-center gap-10 md:mt-0">
      <div className="w-3/5 md:w-1/2">
        <ul className="flex flex-wrap items-center justify-evenly gap-2">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="text-base text-gray-500 hover:text-gray-700 dark:text-white"
            >
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full items-center justify-between px-9 md:w-1/2 md:px-36">
        <Link href="/">
          <BsFacebook className="text-xl" />
        </Link>
        <Link href="/">
          <BsInstagram className="text-xl" />
        </Link>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            className="fill-black dark:fill-white"
          >
            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
          </svg>
        </Link>

        <Link href="/">
          <AiOutlineGithub className="text-xl" />
        </Link>
        <Link href="/">
          <AiFillYoutube className="text-xl" />
        </Link>
      </div>
      <p className="text-center text-base text-gray-500 dark:text-white">
        &copy; Your Company, Inc. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
