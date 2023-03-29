"use client";

import { useEffect } from "react";
import Link from "next/link";

import { UserAuth } from "@/context/AuthContext";
import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function GameOver({ score }) {
  const { user } = UserAuth();

  useEffect(() => {
    const storeUserScore = async () => {
      try {
        const userRef = doc(db, "users", user.email);
        await setDoc(
          userRef,
          {
            scores: { recentScore: score },
          },
          { merge: true }
        );
      } catch (error) {
        console.log(error);
      }
    };

    storeUserScore();
  }, []);

  return (
    <section className="fixed top-0 left-0 z-10 flex justify-center w-full text-gray-400 pt-[10rem] subtract-header-height backdrop-blur-lg bg-white/50 uppercase">
      <div className=" w-[60%] border bg-white  h-[40%] shadow-md text-center py-10 relative ">
        <h2 className="mt-10 select-none text-md mb-7">Game Over</h2>
        <p className="text-xl ">Your Score: {score}</p>

        <div className="flex justify-center gap-3 mt-8">
          <Link
            href="/game"
            className="px-10 py-1 uppercase duration-100 bg-white border hover:bg-gray-300 hover:text-white"
          >
            Play again?
          </Link>
          <Link
            href="/countries"
            className="py-1 uppercase duration-100 bg-white border px-7 hover:bg-gray-300 hover:text-white"
          >
            Review countries
          </Link>
        </div>
      </div>
    </section>
  );
}
