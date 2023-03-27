"use client";
import { useState, useEffect } from "react";
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
  }, [answer]);

  useEffect(() => {
    generateAnswer();
  }, []);

  console.log("GUESSLIST", guessList);
  console.log("ANSWER", answer && answer.name.common);

  return (
    <div className="w-full h-full">
      {!answer ? (
        <p>Loading.....</p>
      ) : (
        <>
          <div className="relative  w-full h-[14rem] sm:h-[18rem]">
            <Image
              src={answer.flags.svg}
              fill={true}
              className="object-fill w-full h-auto border" // TODO: display right click
              alt="Flag to guess!"
            />
          </div>
          <div>tags</div>
        </>
      )}
    </div>
  );
}
