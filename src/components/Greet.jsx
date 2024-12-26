import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello, {props.name}, your age is {props.age} and your gender is{" "}
        {props.gender}
      </h1>
    </div>
  );
};

export default Greet;
