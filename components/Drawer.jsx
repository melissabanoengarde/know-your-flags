import React from "react";
import Link from "next/link";

export default function Drawer({ open }) {
  console.log("d:", open);
  return (
    <aside
      className={`md:hidden w-full mt-[40px] fixed top-0 right-0 bg-white border-b-[1px] transition-top ease-in-out duration-500 z-10 text-gray-400
        ${open ? "top-[0px]" : "top-[-1000px]"}`}
    >
      <ul className="text-sm">
        <li className="px-5 py-1 uppercase hover:bg-green-100 cursor-pointer border-b-[1px]">
          <Link href="/">Login</Link>
        </li>
        <li className="px-5 py-1 uppercase hover:bg-green-100 cursor-pointer">
          <Link href="/">Review</Link>
        </li>
      </ul>
      {/* <p className="uppercase text-xs text-gray-400 text-center">Worldflags</p> */}
    </aside>
  );
}

// backdrop-blur-md bg-white-3/4
