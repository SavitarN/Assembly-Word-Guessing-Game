import React from "react";
import languages from "../languages";
import Button from "./Button";
import "./style.css";
import clsx from "clsx";
const Main = () => {
  const [currentWord, setCurrentWord] = React.useState("react");

  const [guessedLetters, setGuessedLetters] = React.useState([]);

  //function for updating the GuessedLetters//
  function change(letters) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letters) ? prevLetters : [...prevLetters, letters]
    );
  }

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
    console.log(className);
    return (
      <Button
        char={char.toUpperCase()}
        onchange={() => change(char)}
        className={className}
      />
    );
  });

  // fill in the blanks and put word inside it//
  const wordElem = currentWord
    .split("")
    .map((elem, index) => <span key={index}>{elem.toUpperCase()}</span>);

  const chipsElem = languages.map((elem) => {
    return (
      <span
        style={{
          backgroundColor: elem.backgroundColor,
          color: elem.color,
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        {elem.name}
      </span>
    );
  });

  return (
    <div className="main">
      <div className="container">{chipsElem}</div>

      <div className="words">{wordElem}</div>

      <div className="alphabets">{alphabetButton}</div>

      <button className="btns">New Game</button>
    </div>
  );
};

export default Main;
