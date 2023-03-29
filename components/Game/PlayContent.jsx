"use client";

import { useState, useEffect } from "react";
import { Board, GameOver } from "@/components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";

export default function PlayContent({ countries }) {
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(2);
  const [time, setTime] = useState(10);
  const [answer, setAnswer] = useState(null);
  const [guessList, setGuessList] = useState(null);
  const [gameover, setGameover] = useState(false);

  const handleRound = (e) => {
    const selected = e.target.innerHTML;

    if (selected === answer.name.common) {
      setScore(score + 1);
      setTime(time + 5);
      // setCorrect(true);
      generateAnswer();
    } else {
      setScore(score - 1);
      setTime(time - 5);
      // setCorrect(false);
      // if on the last (1) chance the answer is wrong... (to explain why condition is not at 0)
      if (tries === 1) {
        // 0ms delay to ensure that it gets executed after the current render cycle, which allows the 'tries' state to update first.
        setTimeout(() => {
          generateAnswer();
        }, 0);
      }
      setTries(tries - 1);
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
    setTries(2);
    // setCorrect(null);
  };

  useEffect(() => {
    let intervalValue;
    if (time > 0) {
      intervalValue = setTimeout(() => {
        setTime(time - 1);
        // console.log(time);
      }, 1000);
    } else {
      clearTimeout(intervalValue);
      setGameover(true);
    }
    return () => clearTimeout(intervalValue); // clears interval on update
  }, [time]);

  // Ensures that answer remains the same value since useState is async
  useEffect(() => {
    if (answer) {
      handleGuesses(answer);
    }
  }, [answer]);

  useEffect(() => {
    generateAnswer();
  }, []);

  return (
    <>
      {!answer && !guessList ? (
        <div className="text-6xl uppercase animate-spin">
          <AiOutlineLoading3Quarters className="text-gray-400" />
        </div>
      ) : (
        <>
          <Board score={score} tries={tries} time={time} />
          <div className="relative w-full h-[14rem] sm:h-[18rem]">
            {/* <div
              className={`z-20 w-full h-full
              }`}
            /> */}
            <Image
              src={answer && answer.flags.svg}
              fill={true}
              className={`object-fill w-full h-auto border z-10`}
              // TODO: display right click
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
          {gameover && <GameOver score={score} setGameover={setGameover} />}
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
