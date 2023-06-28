import React from "react";
import { auth } from "../../Firebase";
import "../../css/chat.scss";

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className="Mensajes">
      <div className={`message ${messageClass}`}>
        <p className="name">{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
