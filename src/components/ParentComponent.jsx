import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`Hello ${childName}`);
  };
  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
};

export default ParentComponent;
