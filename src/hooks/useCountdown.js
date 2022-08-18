import { useEffect, useState } from "react";

const useCountdown = (countdownTime) => {
  const countDownDate = new Date(countdownTime).getTime();

  const [remainingCountDown, setRemainingCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(remainingCountDown);
};

const getReturnValues = (remainingCountdown) => {
  const days = Math.floor(remainingCountdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (remainingCountdown % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((remainingCountdown % (1000 * 60)) / 1000);

  if (days + hours + minutes + seconds <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return { days, hours, minutes, seconds };
};

export { useCountdown };
