import React, { useState } from "react";

const UserGreeting = () => {
  const [IsloggedIn, setIsLoggedIn] = useState(false);
  //   if (IsloggedIn) {
  //     return <div>Welcome Nishchal</div>;
  //   } else {
  //     return <div>Welcome Guest</div>;
  //   }
  let message;
  if (IsloggedIn) {
    message = <div>Welcome Nishchal</div>;
  } else {
    message = <div>Welcome Guest</div>;
  }
  return <div>{message}</div>;
};

export default UserGreeting;
