"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer } from ".";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Header() {
  const [open, isOpen] = useState(false);
  // console.log(open);

  return (
    <>
      <header className="header-h w-full border-b-[1px] flex justify-between items-center px-5 md:px-8 lg:px-16 bg-white fixed top-0 left-0 z-20 text-gray-400 text-sm">
        <h1 className="uppercase hover:bg-green-100">
          <Link href="/">Worldflags</Link>
        </h1>

        <div onClick={() => isOpen(!open)} className="cursor-pointer md:hidden">
          {open ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-5 uppercase">
            <li className="hover:bg-green-100">
              <Link href="/countries">Review</Link>
            </li>
            <li className="hover:bg-green-100">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:bg-green-100">
              <Link href="/">Login</Link>
            </li>
          </ul>
        </div>
      </header>
      <Drawer open={open} />
    </>
  );
}
