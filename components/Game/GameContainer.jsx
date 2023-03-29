"use client";

import { UserAuth } from "@/context/AuthContext";
import { motion as m } from "framer-motion";

export default function GameContainer({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return null;
  }

  return (
    <m.div
      className="w-full sm:w-[640px] mx-auto h-full flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
      <div className="pt-4 text-xs uppercase">
        <h3 className="mb-3 border-b-[1px] pb-2">Instructions</h3>
        <div className="flex flex-col justify-between gap-2 mb-3 md:grid md:grid-cols-5 md:gap-2">
          <p className="col-start-1 col-end-3">
            The goal is to score as many points as possible before time runs
            out.{" "}
          </p>
          <ul className="col-start-3 col-end-5">
            <li>The initial time is set to 30 seconds</li>
            <li>You have 2 chances to guess per flag</li>
            <li>Correct answer: +1pts, +5s</li>
            <li>Incorrect answer: -1pts, -5s</li>
          </ul>
          <p className="col-start-5 col-end-6 md:text-right">Good luck!</p>
        </div>
      </div>
    </m.div>
  );
}
