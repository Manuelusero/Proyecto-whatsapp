import React from "react";
import "./Message.css";

const Message = ({ memoryMsg }) => {
  return (
    <div className="message-container">
<<<<<<< HEAD
      {memoryMsg.map((msg) => (
=======
      {memoryMsg.map(msg => (
>>>>>>> 0bea2e2 (intentando agregar la page de info)
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
