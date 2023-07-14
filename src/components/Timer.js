import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(300000);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1000);
    }, 1000);

    return () => {
      // Clear the timer when the component unmounts.
      clearInterval(timer);
    };
  }, [timeLeft]);
  return (
    <div>
      <h1>Time left: {timeLeft / 1000} seconds</h1>
    </div>
  );
}
