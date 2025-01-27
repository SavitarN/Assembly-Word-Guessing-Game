import React from "react";
import languages from "../languages";
import "./style.css";
const Main = () => {
  const chipsElem = languages.map((elem) => {
    return (
      <span
        style={{ backgroundColor: elem.backgroundColor, color: elem.color }}
      >
        {elem.name}
      </span>
    );
  });

  return (
    <main>
      <div className="container">{chipsElem}</div>
    </main>
  );
};

export default Main;
