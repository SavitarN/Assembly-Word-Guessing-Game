import React from "react";
import languages from "../languages";
import Button from "./Button";
import "./style.css";
import clsx from "clsx";
import Header from "./Header";
const Main = () => {
  //state values
  const [currentWord, setCurrentWord] = React.useState("react");
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

  return (
    <div className="main">
      <Header
        class={statusClass}
        isGameOver={isGameOver}
        isGameWon={isGameWon}
      />
      <div className="container">{chipsElem}</div>

      <div className="words">{wordElem}</div>

      <div className="alphabets">{alphabetButton}</div>

      {isGameOver && <button className="btns">New Game</button>}
    </div>
  );
};

export default Main;
