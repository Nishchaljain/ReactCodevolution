import React from "react";

const Person = (props) => {
  const { name, age, skill } = props.person;
  return (
    <div>
      <h2>
        I am {name}. My age is {age} and my skill is {skill}
      </h2>
    </div>
  );
};

export default Person;
