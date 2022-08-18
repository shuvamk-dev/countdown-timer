import React from "react";
import "./timerCard.css";

const TimerCard = (props) => {
  const { time, label } = props;

  return (
    <div className="timer-card">
      <div className="timer-card-time">{time}</div>
      <div className="timer-card-label">{label}</div>
    </div>
  );
};

export default TimerCard;
