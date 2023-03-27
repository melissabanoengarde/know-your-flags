"use client";

import { useState, useEffect } from "react";
import Board from "./Board";
import Image from "next/image";

export default function PlayContent({ countries }) {
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [guessList, setGuessList] = useState(null);

  const handleRound = (e) => {
    const selected = e.target.innerHTML;

    console.log("ANSWER", answer && answer.name.common);
    console.log(selected);

    if (selected === answer.name.common && selected !== null) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleGuesses = (answer) => {
    const shuffledCountries = countries.sort(() => 0.5 - Math.random());
    const guesses = shuffledCountries.slice(0, 3);
    guesses.push(answer);
    setGuessList([...guesses.sort(() => 0.5 - Math.random())]);
  };

  const generateAnswer = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setAnswer(countries[randomIndex]);
  };

  // Ensures that answer remains the same value since useState is async
  useEffect(() => {
    if (answer) {
      handleGuesses(answer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  useEffect(() => {
    generateAnswer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!answer && !guessList ? (
        <p>Loading.....</p>
      ) : (
        <>
          <Board score={score} />
          <div className="relative w-full h-[14rem] sm:h-[18rem]">
            <Image
              src={answer && answer.flags.svg}
              fill={true}
              className="object-fill w-full h-auto border" // TODO: display right click
              alt="Flag to guess!"
            />
          </div>

          <div className="grid w-full grid-cols-2 grid-rows-2 gap-2">
            {guessList &&
              guessList.map((guess, index) => (
                <button
                  key={index}
                  onClick={handleRound}
                  className="px-1 py-2 text-sm text-gray-400 uppercase duration-100 border border-gray-300 sm:text-md hover:bg-gray-300 hover:text-white md:text-lg active:bg-gray-300 active:text-white"
                >
                  {guess.name.common}
                </button>
              ))}
          </div>
        </>
      )}
    </>
  );
}

// Gameover === 0s
// Next round === 0 chances
// Each round === 2 chances

// Start with 30 seconds
// When user scores correct => +5s, +1pt, 0 chances, next round
// When user scores incorrect => -5s, -1px, -1 chance,
