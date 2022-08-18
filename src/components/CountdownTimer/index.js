import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import TimerEnd from "../TimerEnd";
import "./countdownTimer.css";
import TimerCard from "./TimerCard";

const CountdownTimer = (props) => {
  const { countdownTime, setShowTimer, setTimeInSeconds } = props;

  console.log(countdownTime, new Date().getTime());
  const { days, hours, minutes, seconds } = useCountdown(countdownTime);

  return days || hours || minutes || seconds ? (
    <div className="countdown-timer">
      <TimerCard time={days} label={days > 1 ? "DAYS" : "DAY"} />

      <TimerCard time={hours} label={hours > 1 ? "HOURS" : "HOUR"} />

      <TimerCard time={minutes} label={minutes > 1 ? "MINUTES" : "MINUTE"} />

      <TimerCard time={seconds} label={seconds > 1 ? "SECONDS" : "SECOND"} />
    </div>
  ) : (
    <TimerEnd setShowTimer={setShowTimer} setTimeInSeconds={setTimeInSeconds} />
  );
};

export default CountdownTimer;
