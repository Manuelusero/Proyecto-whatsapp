import React from "react";
import "./Message.css";

const Message = ({ memoryMsg }) => {
  //   const classMessage = author === "yo" ? "message-right" : "message-left";
  //   const statusMessage = status === "visto" ? "visto" : "no-visto";

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
    </div>
  );
};

export default Message;
