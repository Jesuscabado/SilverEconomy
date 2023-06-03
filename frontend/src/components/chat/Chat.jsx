import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { db } from "../Firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import NavBar from "./NavBar";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      <SendMessage scroll={scroll} />;
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div>
        <h1>Chat</h1>
        {messages &&
          messages.map((message) => <Message key={message.id} {...message} />)}
        <span ref={scroll}></span>
      </div>
    </>
  );
};

export default Chat;
