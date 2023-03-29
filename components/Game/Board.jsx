"use client";

import useFetchUserInfo from "@/hooks/fetchUserInfo";

export default function Board({ score, tries, time }) {
  const { infos } = useFetchUserInfo();

  return (
    <div className="flex items-center justify-between w-full gap-2 text-gray-400 uppercase">
      <div className="text-xs">
        <p className="pb-1">Player: {infos.username}</p>
        <p>Your highscore: 17</p>
      </div>

      <ul className="grid w-3/5 grid-cols-3 text-sm sm:text-md flex-8">
        <li>
          <small className="select-none ">Time</small>
          <p className="text-sm sm:text-xl">{time}</p>
        </li>
        <li className="text-center justify-self-center">
          <small className="select-none ">Tries</small>
          <p className="text-sm sm:text-xl">{tries}/2</p>
        </li>
        <li className="text-right justify-self-end">
          <small className="select-none ">Score</small>
          <p className="text-sm sm:text-xl">{score}</p>
        </li>
      </ul>
    </div>
  );
}
