import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";

const initialHealth = 100;
const damageByHit = 10;

const PumpkinHealthbar = forwardRef(({ setIsGameOver, setIsGameWon }, ref) => {
  const [pumpkinHealth, setPumpkinHealth] = useState(initialHealth);

  const healthBarRef = useRef(null);

  useImperativeHandle(ref, () => ({
    lowerHealth() {
      setPumpkinHealth(pumpkinHealth - damageByHit);
      healthBarRef.current.value -= damageByHit;

      if (healthBarRef.current.value === 0) {
        setIsGameOver();
        setIsGameWon();
      }
    },
  }));

  return (
    <>
      <div className="pumpkin__health-container">
        <div className="pumpkin__health-value">{pumpkinHealth}</div>
        <progress ref={healthBarRef} className="pumpkin__healthbar" value={initialHealth} max={initialHealth}></progress>
      </div>
    </>
  );
});

export default PumpkinHealthbar;
