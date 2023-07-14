import React, { useRef } from 'react';

export default function Ref() {
    const inputRef = useRef();

    const handleFocus = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
    );
}
