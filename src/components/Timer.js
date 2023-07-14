import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(3000);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(0);
    }, 3000);

    return () => {
      // Clear the timer when the component unmounts.
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <h1>Time left: {timeLeft}</h1>
    </div>
  );
}
