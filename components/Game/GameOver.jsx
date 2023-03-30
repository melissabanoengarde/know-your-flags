"use client";

import { useEffect } from "react";
import Link from "next/link";

import { UserAuth } from "@/context/AuthContext";
import { db } from "@/config/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import useFetchUserInfo from "@/hooks/fetchUserInfo";

export default function GameOver({ score, infos }) {
  const { user } = UserAuth();
  const { setInfos } = useFetchUserInfo();

  console.log("🔴 GAMEOVER:", infos);

  useEffect(() => {
    const updateUserScore = async (currentScore) => {
      const userRef = doc(db, "users", user.email);

      if (
        currentScore > infos.highScore ||
        (infos.recentScore === undefined && infos.highScore === undefined)
      ) {
        setInfos({
          ...infos,
          highScore: currentScore,
          recentScore: currentScore,
        });
        await setDoc(
          userRef,
          {
            highScore: currentScore,
            recentScore: currentScore,
          },
          { merge: true }
        );
        console.log("line34", infos);
      } else {
        setInfos({ ...infos, recentScore: currentScore });
        await setDoc(
          userRef,
          {
            recentScore: currentScore,
          },
          { merge: true }
        );
        console.log("line44", infos);
      }
    };

    updateUserScore(score);
  }, [score, infos, setInfos]);

  return (
    <section className="fixed top-0 left-0 z-[11] flex justify-center w-full text-gray-400 pt-[10rem] subtract-header-height backdrop-blur-lg bg-white/50 uppercase">
      <div className=" w-[60%] border bg-white  h-[40%] shadow-md text-center py-10 relative ">
        <h2 className="mt-10 select-none text-md mb-7">Game Over</h2>

        <div className="flex items-center justify-between w-[300px] mx-auto text-xl ">
          <span className="">Your Score: {score}</span>
          <span>
            Highscore: {score > infos.highScore ? score : infos.highScore}
          </span>
        </div>

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
