import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 px-10 border-b-[1px] shadow-sm">
      <div className="flex gap-10 items-center">
        <Image src="/logo.png" alt="logo" width={120} height={60} />
        <div className="hidden md:flex gap-6">
          <h1 className="hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all">
            Home
          </h1>
          <h1 className="hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all">
            History
          </h1>
          <h1 className="hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all">
            Help
          </h1>
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
