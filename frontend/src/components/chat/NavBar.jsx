import React from "react";
import Register from "../Register";
import Login from "../Login";
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <h1>Chat</h1>
      {/*  {user ? <Login /> : <Register />} */}
    </div>
  );
};

export default NavBar;
