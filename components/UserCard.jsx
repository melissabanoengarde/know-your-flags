"use client";
import { useState } from "react";
import { UserAuth } from "@/context/AuthContext";

export default function UserCard() {
  const { user } = UserAuth();

  // const createdAt = user.metadata?.createdAt;
  // const date = createdAt ? new Date(createdAt) : null;

  return (
    <section>
      <ul className="grid w-full grid-cols-3 mt-8 text-gray-400 uppercase lg:3/5 xl:w-5/6">
        <li className="">
          <p className="text-xs">Name</p>
          <p>{user && user.displayName}</p>
        </li>
        <li className="">
          <p className="text-xs">Email</p>
          <p>{user && user.email}</p>
        </li>
        {/* <li className="">
          <p className="text-xs">Account created</p>
          <p>{date ? date.toLocaleDateString() : ""}</p>
        </li> */}
      </ul>
    </section>
  );
}
