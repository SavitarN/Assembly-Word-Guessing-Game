import React from "react";
import "./style.css";
const Header = (props) => {
  function renderGameStatus() {
    if (!props.isGameOver && props.isLastGuessIncorrect) {
      return <p className={props.class}>Bye</p>;
    }

    if (props.isGameWon) {
      return (
        <>
          <h2>You Win !</h2>
          <p>Well Done🎉</p>
        </>
      );
    }
    if (props.isGameLost) {
      return (
        <>
          <h2>Game Over</h2>
          <p>Now you have to live with assembly language</p>
        </>
      );
    }
    return null;
  }

  return (
    <header>
      <h2>Assembly:Endgame</h2>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
      <div className={props.class}>{renderGameStatus()}</div>
    </header>
  );
};

export default Header;
