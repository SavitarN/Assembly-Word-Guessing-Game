import React from "react";
import languages from "../languages";
import Button from "./Button";
import "./style.css";
import clsx from "clsx";
import Header from "./Header";
import { getFarewellText } from "./utils";
import { randomWords } from "./utils";
const Main = () => {
  //state values
  const [currentWord, setCurrentWord] = React.useState(() => randomWords());
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  //Derived values//
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameOver = isGameWon || isGameLost;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  //function for updating the GuessedLetters//
  function change(letters) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letters) ? prevLetters : [...prevLetters, letters]
    );
  }

  //for gamewon or loss status//
  const statusClass = clsx("status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  //for color change check if the guessed  letter is there on currentWord //
  const selectedColor = guessedLetters.includes(currentWord);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetButton = alphabet.split("").map((char) => {
    const isGuessed = guessedLetters.includes(char);
    const isCorrect = isGuessed && currentWord.includes(char);
    const isWrong = isGuessed && !currentWord.includes(char);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <Button
        char={char.toUpperCase()}
        onchange={() => change(char)}
        className={className}
        disabled={isGameWon}
      />
    );
  });

  // fill in the blanks and put word inside it//
  const wordElem = currentWord.split("").map((elem, index) => {
    return (
      <span key={index}>
        {guessedLetters.includes(elem) ? elem.toUpperCase() : ""}
      </span>
    );
  });

  const chipsElem = languages.map((elem, index) => {
    const isLanguageLost = index < wrongGuessCount;

    return (
      <span
        style={{
          backgroundColor: elem.backgroundColor,
          color: elem.color,
        }}
        key={index}
        className={`chip ${isLanguageLost ? "lost" : ""}`}
      >
        {elem.name}
      </span>
    );
  });
  const farewellText =
    wrongGuessCount > 0 && wrongGuessCount <= languages.length
      ? getFarewellText(languages[wrongGuessCount - 1].name)
      : "";

  return (
    <div className="main">
      <Header
        class={statusClass}
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isLastGuessIncorrect={isLastGuessIncorrect}
        isGameLost={isGameLost}
        wrongGuessCount={wrongGuessCount}
        getFarewellText={farewellText}
        languages={languages}
      />
      <div className="container">{chipsElem}</div>

      <div className="words">{wordElem}</div>

      <div className="alphabets">{alphabetButton}</div>

      {isGameOver && <button className="btns">New Game</button>}
    </div>
  );
};

export default Main;
