import React from "react";

const NameList = () => {
  const names = ["Nishchal", "Divya", "Samriddhi", "Ridit"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
};

export default NameList;
