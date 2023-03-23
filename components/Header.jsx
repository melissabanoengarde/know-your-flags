import React from "react";
import Link from "next/link";
import { IoMdMenu, IoIosClose } from "react-icons/io";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">Worldflags</Link>
      </h1>

      <div>
        <IoMdMenu />
      </div>
    </header>
  );
}
