import React, { useState } from "react";

const UserGreeting = () => {
  const [IsloggedIn, setIsLoggedIn] = useState(true);
  if (IsloggedIn) {
    return <div>Welcome Nishchal</div>;
  } else {
    return <div>Welcome Guest</div>;
  }
};

export default UserGreeting;
