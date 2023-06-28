import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { db } from "../../Firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import NavbarSinTexto from "../NavbarSinTexto";
import SideBar from "../SideBar";
import "../../css/chat.scss";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "desc"),
      limit(5)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages.reverse());
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavbarSinTexto />
      <SideBar />
      <main className='main'>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        {/* Send Message Component */}
        <SendMessage scroll={scroll} />
        <span ref={scroll}></span>
      </main>
    </>
  );
};

export default Chat;
