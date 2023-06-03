import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
const SendMessage = (scroll) => {
  const [input, setInput] = useState("");
  const SendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <form onSubmit={SendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;
