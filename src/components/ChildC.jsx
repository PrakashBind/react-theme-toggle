import React, { useContext } from "react";
import { UserContext, ThemeContext } from "./UserContext";

const ChildC = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div>Data : {user.name}</div>
    </>
  );
};

export default ChildC;
