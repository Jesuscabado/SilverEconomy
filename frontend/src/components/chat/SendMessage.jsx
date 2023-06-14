import React, { useState } from "react";
import { auth, db } from "../../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../../css/chat.scss";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, email } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: email.split("@")[0],
      uid,
      timestamp: serverTimestamp(),
      email: email,
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="BarraMensaje">
      <form onSubmit={sendMessage} className="form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          type="text"
          placeholder="Message"
        />
        <button className="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
