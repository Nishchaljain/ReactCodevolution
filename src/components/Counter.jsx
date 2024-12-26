import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrement Counter</button>
    </div>
  );
};
