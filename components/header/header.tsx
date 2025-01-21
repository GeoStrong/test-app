// import { AiOutlineMenu } from 'react-icons/ai';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet';
import MenuIcon from '@/public/SVG components/menu';
import Search from './search';
const Header: React.FC = () => {
  return (
    <div className="w-full p-6 md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-5">
            <Search />
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Header;
