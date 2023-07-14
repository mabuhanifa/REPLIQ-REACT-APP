import React, { useCallback, useState } from "react";

export default function Callback() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      The count is: {count}
      <button onClick={incrementCount}>  : Increment</button>
    </div>
  );
}
