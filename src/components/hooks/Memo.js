import { useMemo, useState } from "react";
import AnotherComponent from "../AnotherComponent";

export default function Memo() {
    const state = useState({
      name: "John Doe",
    });
  
    const renderedComponent = useMemo(() => (
      <AnotherComponent name={state.name} />
    ), [state.name]);
  
    return renderedComponent;
  }

  export function ListData() {
    const data = useMemo(() => [1, 2, 3, 4, 5], []);
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }