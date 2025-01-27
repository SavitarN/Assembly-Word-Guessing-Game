import React from "react";
import "./style.css";
const Header = () => {
  return (
    <header>
      <h2>Assembly:Endgame</h2>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>

      <div className="status">
        <h2>You Win !</h2>
        <p>Well Done🎉</p>
      </div>
    </header>
  );
};

export default Header;
