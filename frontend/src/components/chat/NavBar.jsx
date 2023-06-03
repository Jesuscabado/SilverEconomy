import React from "react";
import Signup from "../Signup";
import Login from "../Login";
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <h1>Chat</h1>
      {user ? <Login /> : <Signup />}
    </div>
  );
};

export default NavBar;
