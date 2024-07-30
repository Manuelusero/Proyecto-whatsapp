import React from "react";
import "./Message.css";

const Message = ({ memoryMsg }) => {
  return (
    <div className="message-container">
      {memoryMsg.map(msg => (
        <div key={msg.id}>
          <p>
            {msg.author}: {msg.content}
          </p>
          <p>
            {msg.date} {msg.hour}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Message;
