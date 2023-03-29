"use client";

import Link from "next/link";
import { useState } from "react";
import { Drawer, Menu } from ".";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { UserAuth } from "@/context/AuthContext";
import useFetchUserInfo from "@/hooks/fetchUserInfo";

export default function Header() {
  const [open, isOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { user } = UserAuth();
  const { infos } = useFetchUserInfo();

  return (
    <>
      <header className="header-h w-full border-b-[1px] flex justify-between items-center px-5 md:px-8 lg:px-16 bg-white fixed top-0 left-0 z-20 text-gray-400 text-sm">
        <h1 className="uppercase hover:bg-green-100">
          <Link href="/">Worldflags</Link>
        </h1>

        <div onClick={() => isOpen(!open)} className="cursor-pointer md:hidden">
          {open ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}
        </div>

        <div className="items-center hidden md:flex ">
          <ul className="flex gap-5 uppercase">
            <li className="hover:bg-green-100">
              <Link href="/countries">Countries</Link>
            </li>

            {user && (
              <li className="hover:bg-green-100">
                <Link href="/game">Play</Link>
              </li>
            )}
            <li className="hover:bg-green-100">
              {user ? (
                <p
                  onClick={() => setShowMenu(!showMenu)}
                  className="cursor-pointer"
                >
                  {infos.username ? infos.username : user.displayName}
                </p>
              ) : (
                <Link href="/login">Play</Link>
              )}
            </li>
          </ul>
        </div>
      </header>

      <Drawer open={open} isOpen={isOpen} />
      <Menu showMenu={showMenu} user={user} />
    </>
  );
}

// bg-white/70 backdrop-blur-md
