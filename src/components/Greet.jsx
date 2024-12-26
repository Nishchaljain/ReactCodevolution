import React from "react";

const Greet = (props) => {
  const { name, age, gender } = props;
  return (
    <div>
      <h1>
        Hello, {name}, your age is {age} and your gender is {gender}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
