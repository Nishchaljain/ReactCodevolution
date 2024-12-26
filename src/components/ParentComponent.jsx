import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const greetParent = () => {
    alert("Hello Parent");
  };
  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
};

export default ParentComponent;
