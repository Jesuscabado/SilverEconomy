/* import React, { useState } from "react";
import { auth, db } from "../../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import "../../css/sendMessage.scss";
const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a vali.messageContainer  message");
      return;
    }
    const { uid, email } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: email.split("@")[0],
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form clasName="messageContainer" onSubmit={sendMessage}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage; */

import React, { useState } from "react";
import { auth, db } from "../../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-[40%] max-w-[40%] mx-auto ml-80 flex text-xl absolute bottom-0 p-1`,
  input: `w-full text-xl p-3 bg-gray-400 text-black outline-none border-none`,
  button: `w-[20%] bg-gray-500`,
};

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
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
