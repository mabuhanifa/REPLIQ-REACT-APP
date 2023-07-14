import { useMemo, useState } from "react";

function Memo() {
    const state = useState({
      name: "John Doe",
    });
  
    const renderedComponent = useMemo(() => (
      <AnotherComponent name={state.name} />
    ), [state.name]);
  
    return renderedComponent;
  }