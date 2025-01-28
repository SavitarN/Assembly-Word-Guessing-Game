import React from "react";
import languages from "../languages";
import Button from "./Button";
import "./style.css";

const Main = () => {
  const [currentWord, setCurrentWord] = React.useState("react");

  const [guessedLetters, setGuessedLetters] = React.useState([]);
  console.log(guessedLetters);

  //function for updating the GuessedLetters//
  function change(letters) {
    setGuessedLetters((prevLetters) => [...prevLetters, letters]);
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetButton = alphabet
    .split("")
    .map((char) => (
      <Button char={char.toUpperCase()} onchange={() => change(char)} />
    ));

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
