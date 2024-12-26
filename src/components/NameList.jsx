import React from "react";
import Person from "./Person";

const NameList = () => {
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
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div> {personList}</div>;
};

export default NameList;
