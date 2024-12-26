import React from "react";

export const FunctionClick = () => {
  const clickHandler = () => {
    alert("Button clicked");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};
