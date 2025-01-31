import React from "react";
import "./style.css";
const Header = (props) => {
  console.log(props.isGameOver);
  return (
    <header>
      <h2>Assembly:Endgame</h2>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
      <div className={props.class}>
        {props.isGameOver ? (
          props.isGameWon ? (
            <>
              <h2>You Win !</h2>
              <p>Well Done🎉</p>
            </>
          ) : (
            <>
              <h2>Game Over</h2>
              <p>Now you have to live with assembly language</p>
            </>
          )
        ) : null}
      </div>
    </header>
  );
};

export default Header;
