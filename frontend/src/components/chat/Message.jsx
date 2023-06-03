import React from "react";
import { auth } from "../Firebase";
const Message = ({ message /* , timestamp, user, userImage */ }) => {
  const mesaggeClass =
    message.uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div>
      {/* <img src={userImage} alt="" /> */}
      <div>
        <h4>
          {message.name}
          {/*  {user} */}
        </h4>
        <p>{message.timestamp}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
