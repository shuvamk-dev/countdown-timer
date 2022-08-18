import React from "react";
import "./timerInput.css";

const TimerInput = (props) => {
  const { setTimeInSeconds, timeInSeconds, setShowTimer } = props;

  const handleTimeInput = (e) => {
    if (!isNaN(e.target.value)) setTimeInSeconds(Number(e.target.value));
    if (Number(e.target.value) === 0) {
      setTimeInSeconds(null);
    }
  };

  const handleStartClick = () => {
    setShowTimer(true);
  };

  return (
    <div className="timer-input-wrapper">
      <input
        onChange={handleTimeInput}
        value={timeInSeconds}
        className="timer-input"
        placeholder="Time in seconds"
      />
      <div className="timer-start" onClick={handleStartClick}>
        Start
      </div>
    </div>
  );
};

export default TimerInput;
