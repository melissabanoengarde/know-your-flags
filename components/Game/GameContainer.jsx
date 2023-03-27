"use client";

import { UserAuth } from "@/context/AuthContext";

export default function GameContainer({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="w-full sm:w-[640px] mx-auto h-full">
      <div className="flex flex-col items-center gap-10 pt-[6rem] w-full h-full">
        {children}
      </div>
    </div>
  );
}
