import React from "react";
import "./timerEnd.css";

const TimerEnd = (props) => {
  const { setShowTimer, setTimeInSeconds } = props;

  const handleClickAgainBtn = () => {
    setTimeInSeconds(undefined);
    setShowTimer(false);
  };

  return (
    <div className="timer-end" onClick={handleClickAgainBtn}>
      Time's Up! <br /> Click to start again
    </div>
  );
};

export default TimerEnd;
