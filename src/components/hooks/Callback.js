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

export function ListComponent() {
    const items = [1, 2, 3, 4, 5];
  
    const renderItem = useCallback(
      (item, index) => (
        <li key={index}>{item}</li>
      ),
      []
    );
  
    return (
      <ul>
        {items.map(renderItem)}
      </ul>
    );
  }