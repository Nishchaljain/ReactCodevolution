import React from "react";

const NameList = () => {
  const names = ["Nishchal", "Divya", "Samriddhi", "Ridit"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return <div> {nameList}</div>;
};

export default NameList;
