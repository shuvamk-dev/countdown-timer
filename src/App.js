import React, { useState } from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import TimerInput from "./components/TimerInput";

const App = () => {
  const [timeInSeconds, setTimeInSeconds] = useState();
  const [showTimer, setShowTimer] = useState(false);

  const getCountdownTime = () => {
    const timeInMilliSeconds = timeInSeconds * 1000;
    const countdownTime = new Date().getTime() + timeInMilliSeconds;
    return countdownTime;
  };

  return (
    <div className="app">
      {showTimer ? (
        <CountdownTimer
          countdownTime={getCountdownTime()}
          setShowTimer={setShowTimer}
          setTimeInSeconds={setTimeInSeconds}
        />
      ) : (
        <TimerInput
          setTimeInSeconds={setTimeInSeconds}
          timeInSeconds={timeInSeconds}
          setShowTimer={setShowTimer}
        />
      )}
    </div>
  );
};

export default App;
