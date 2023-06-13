/*COMPONENTE SIN CSS*/
/* import React from "react";
import { auth } from "../../Firebase";

const Message = ({ message }) => {
  const mesage = message.uid === auth.currentUser.uid;

  return (
    <div>
      <div>
        <h1>{message.name}</h1>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message; */
import React from "react";
import { auth } from "../../Firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `flex mt-[-4rem] text-gray-600 text-xs`,
  mail: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
