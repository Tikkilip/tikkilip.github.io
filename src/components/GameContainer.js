import React, { useState } from "react";
import EndGameScreen from "./EndGameScreen";
import Game from "./Game";
import Start from "./Start";

const endGameStrings = {
  win: "Congratulations! You won this time! But The Evil Pumpkin will come back on the next Halloween...",
  lose: "You lose! I bet, you are not The One, but you may try once again if you want to...",
};

const GameContainer = () => {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isTimeGone, setIsTimeGone] = useState(false);

  return (
    <div className="game__container">
      {!isGameActive && !isGameOver && <Start setIsGameActive={() => setIsGameActive(true)} />}
      {isGameActive && !isGameOver && <Game setIsGameOver={() => setIsGameOver(true)} setIsGameWon={() => setIsGameWon(true)} setIsTimeGone={() => setIsTimeGone(true)} />}
      {isGameOver && isGameWon && <EndGameScreen finalText={endGameStrings.win} />}
      {isGameOver && isTimeGone && <EndGameScreen finalText={endGameStrings.lose} />}
    </div>
  );
};

export default GameContainer;
