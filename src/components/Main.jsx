import React from "react";
import languages from "../languages";
import Button from "./Button";
import "./style.css";

const Main = () => {
  const [currentWord, setCurrentWord] = React.useState("react");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetButton = alphabet
    .split("")
    .map((char) => <Button char={char.toUpperCase()} />);

  const wordElem = currentWord
    .split("")
    .map((elem) => <span>{elem.toUpperCase()}</span>);
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
    </div>
  );
};

export default Main;
