import React from "react";
import { useState, useEffect } from "react";

const initialTime = 120;

const Timer = ({ setIsGameOver, setIsTimeGone }) => {
  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setIsGameOver();
        setIsTimeGone();
      }
    }, 1000);
  });

  return <div className="timer">Time left: {seconds === 0 ? null : <h1> {seconds < 10 ? `0${seconds}` : seconds}</h1>}</div>;
};

export default Timer;
