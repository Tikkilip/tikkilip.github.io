import React, { useState, useEffect, useRef } from "react";
import sword from "../img/sword.png";
import Pumpkin from "./Pumpkin";
import PumpkinHealthbar from "./PumpkinHealthbar";
import Timer from "./Timer";
import { getWord } from "../services/getWord";

const Game = ({ setIsGameOver, setIsGameWon, setIsTimeGone }) => {
  const [word, setWord] = useState("Loading...");
  const [btnIsClicked, setBtnIsClicked] = useState(false);
  const [action, setAction] = useState("Try to hit me!");

  const inputRef = useRef(null);
  const pumpkinHealthRef = useRef(null);

  useEffect(() => {
    getWord()
      .then((res) => res.json())
      .then((result) => {
        setWord(result[0]);
      });
  }, [btnIsClicked]);

  const inputFocus = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const getDownPumpkinHealth = () => {
    pumpkinHealthRef.current.lowerHealth();
  };

  const clearBorder = () => {
    setTimeout(() => {
      inputRef.current.style.border = "none";
    }, 600);
  };

  const checkForMatch = () => {
    if (word === inputRef.current.value) {
      setAction("Hit!");
      getDownPumpkinHealth();
      setBtnIsClicked(!btnIsClicked);
      inputFocus();

      inputRef.current.style.border = "3px solid green";
      clearBorder();
    } else {
      setAction("Miss!");
      inputFocus();

      inputRef.current.style.border = "3px solid red";
      clearBorder();
    }
  };

  return (
    <>
      <PumpkinHealthbar ref={pumpkinHealthRef} setIsGameOver={setIsGameOver} setIsGameWon={setIsGameWon} />
      <Pumpkin />
      <Timer setIsGameOver={setIsGameOver} setIsTimeGone={setIsTimeGone} />

      <div className="actions__container">{action}</div>
      <div className="input__UI">
        <div className="output__word">{word}</div>
        <input className="input__input" type="text" ref={inputRef}></input>
        <button className="input__btn" onClick={checkForMatch}>
          <img className="input__sword-img" src={sword} alt="sword"></img>
          Hit
        </button>
      </div>
    </>
  );
};

export default Game;
