import React from "react";
import Signup from "../Signup";
import Login from "../Login";

import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

const NavBar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <Login /> : <Signup />}
    </div>
  );
};

export default NavBar;
