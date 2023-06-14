import React, { useState } from "react";
import { auth, db } from "../../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const style = {
  form: "h-14 max-w-[1728px] flex items-center bg-gray-200 fixed bottom-0 mx-auto",
  input: "flex-1 text-xl p-3 bg-white outline-none",
  button: "w-20 h-12 bg-green-500 text-white font-bold rounded-full mx-4",
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
    <div>
      <form onSubmit={sendMessage} className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Message'
        />
        <button className={style.button} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
