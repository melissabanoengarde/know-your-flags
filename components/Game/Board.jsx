import React from "react";

export default function Board({ score }) {
  return (
    <div className="w-full uppercase">
      <ul className="grid grid-cols-3 text-sm text-gray-400 sm:text-md">
        <li>
          <small className="select-none ">Time</small>
          <p className="text-sm sm:text-xl">2130</p>
        </li>
        <li className="text-center justify-self-center">
          <small className="select-none ">Chances</small>
          <p className="text-sm sm:text-xl">1/2</p>
        </li>
        <li className="text-right justify-self-end">
          <small className="select-none ">Score</small>
          <p className="text-sm sm:text-xl">{score}</p>
        </li>
      </ul>
    </div>
  );
}
