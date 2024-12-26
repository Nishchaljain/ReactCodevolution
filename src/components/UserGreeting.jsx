import React, { useState } from "react";

const UserGreeting = () => {
  const [IsloggedIn, setIsLoggedIn] = useState(true);
  //   if (IsloggedIn) {
  //     return <div>Welcome Nishchal</div>;
  //   } else {
  //     return <div>Welcome Guest</div>;
  //   }
  //   let message;
  //   if (IsloggedIn) {
  //     message = <div>Welcome Nishchal</div>;
  //   } else {
  //     message = <div>Welcome Guest</div>;
  //   }
  //   return <div>{message}</div>;
  //   return IsloggedIn ? <div>Welcome Nishchal</div> : <div>Welcome Guest</div>;
  return IsloggedIn && <div>Welcome Nishchal</div>;
};

export default UserGreeting;
