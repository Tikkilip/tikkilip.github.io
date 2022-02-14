import React from "react";

const EndGameScreen = ({ finalText }) => {
  const playAgain = () => {
    window.location.reload();
  };

  return (
    <div className="end-game-screen">
      <p>{finalText}</p>
      <button className="play-again__btn" onClick={playAgain}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default EndGameScreen;
