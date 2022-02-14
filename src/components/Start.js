import React from "react";

const Start = ({ setIsGameActive }) => {
  return (
    <>
      <div className="start-menu__container">
        <div className="start-menu__text">
          The Evil Pumpkin is coming! <br />
          Only The Fastest Typer is able to defeat it! <br />
          Detroy it by typing words correctly before the timer ends.
        </div>
        <button className="start-menu__btn" onClick={setIsGameActive}>
          START
        </button>
      </div>
    </>
  );
};

export default Start;
