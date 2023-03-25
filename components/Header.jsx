"use client";

import Link from "next/link";
import { useState } from "react";
import { Drawer } from ".";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { UserAuth } from "@/context/AuthContext";

export default function Header() {
  const [open, isOpen] = useState(false);
  const { user } = UserAuth();

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
              {user ? (
                <span className="cursor-pointer">
                  {/* dropdown menu of dashboard/account, logout btn */}
                  Hi {user.displayName}
                </span>
              ) : (
                <Link href="/">Play</Link>
              )}
            </li>
          </ul>
        </div>
      </header>
      <Drawer open={open} />
    </>
  );
}

// bg-white/70 backdrop-blur-md
