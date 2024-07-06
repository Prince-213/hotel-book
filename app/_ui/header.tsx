import React from "react";
import Link from "next/link";
import { User } from "lucide-react";
import BookButton from "../_ui/book_button";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Header = () => {
  return (
    <header className=" w-full py-4 shadow-lg fixed top-0 z-50 bg-white">
      <div className=" w-[80%] mx-auto flex items-center justify-between">
        <Link href={"/"} className=" font-author font-medium text-[54px]">
          Robins Hotels
        </Link>
        <nav>
          <ul className=" flex items-center space-x-4 text-lg font-semibold">
            <Link href={"/property"}>Property</Link>
            <Link href={"/reviews"}>Reviews</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </ul>
        </nav>
        <div className=" flex items-center space-x-5">
          <Popover className="relative z-50">
            <PopoverButton className=" border-none">
              <div className=" w-14 h-14 rounded-[50%] bg-gray-200 flex items-center justify-center">
                <User />
              </div>
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="flex flex-col font-medium space-y-3 bg-white border-2 shadow-lg rounded-xl p-5 z-[9999]"
            >
              <Link href="/signup">Sign Up</Link>
              <Link href="/signin">Sign In</Link>
            </PopoverPanel>
          </Popover>
          <BookButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
