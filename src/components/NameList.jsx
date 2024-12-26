import React from "react";
import Person from "./Person";

// When to use index as key:
// 1. When the items in your list do not have a unique id
// 2. The list is a static list and will not change
// 3. The list will never be reordered or filtered

const NameList = () => {
  const names = ["Nishchal", "Divya", "Samriddhi", "Ridit"];
  const persons = [
    {
      id: 1,
      name: "Nishchal",
      age: 37,
      skill: "React",
    },
    {
      id: 2,
      name: "Divya",
      age: 33,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Samriddhi",
      age: 8,
      skill: "Vue",
    },
    {
      id: 4,
      name: "Ridit",
      age: 4,
      skill: "Next",
    },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div> {nameList}</div>;
};

export default NameList;
