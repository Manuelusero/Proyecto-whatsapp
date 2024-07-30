import React from "react";
import "./Message.css";
import MessageForm from "../MessageForm/MessageForm";

const Message = ({ memoryMsg }) => {
  return (
    <div className="message-container">
      {memoryMsg.map((msg) => (
        <div key={msg.id}>
          <p>
            {msg.author}: {msg.content}
          </p>
          <p>
            {msg.date} {msg.hour}
          </p>
        </div>
      ))}
      {/* <MessageForm /> */}
    </div>
  );
};

export default Message;
