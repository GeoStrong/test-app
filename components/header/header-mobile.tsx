import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Search from "./search";
import { Button } from "../ui/button";
import Socials from "./socials";
import logoImg from "@/public/logo.svg";
import MenuIcon from "@/public/SVG components/menuIcon";
import Image from "next/image";

const HeaderMobile: React.FC = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between p-6 md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="dark:bg-dark-100">
            <SheetHeader className="mt-5 flex h-3/4 flex-col items-center justify-between">
              <SheetTitle>
                <Search />
              </SheetTitle>
              <SheetDescription className="w-full">
                <Button className="mb-4 w-full rounded-sm p-6 text-base">
                  Start Buying
                </Button>
                <Socials />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="dark:rounded-md dark:bg-white dark:p-2">
          <Image src={logoImg.src} alt="logo" width={129} height={23} />
        </div>
        <div></div>
      </div>
    </>
  );
};
export default HeaderMobile;
