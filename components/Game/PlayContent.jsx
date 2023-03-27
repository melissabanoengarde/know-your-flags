"use client";
import { useState, useEffect } from "react";
import Tags from "./Tags";
import Image from "next/image";

export default function PlayContent({ countries }) {
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [guessList, setGuessList] = useState(null);

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

  console.log("GUESSLIST", guessList);
  console.log("ANSWER", answer && answer.name.common);

  return (
    <>
      {!answer && !guessList ? (
        <p>Loading.....</p>
      ) : (
        <>
          <div className="relative  w-full h-[14rem] sm:h-[18rem]">
            <Image
              src={answer && answer.flags.svg}
              fill={true}
              className="object-fill w-full h-auto border" // TODO: display right click
              alt="Flag to guess!"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            {guessList &&
              guessList.map((guess, index) => (
                <Tags name={guess.name.common} key={index} />
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
