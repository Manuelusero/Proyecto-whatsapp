import React from 'react';
import './Message.css';

const Message = ({ memoryMsg }) => {
  return (
    <div className="message-container">
      {memoryMsg.map((msg) => (
        <div key={msg.id} className={msg.author === "yo" ? 'message-right' : 'message-left'}>
          <p>
            {msg.author}: {msg.content}
          </p>
          <p className='message-hour'>
            {msg.hour}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Message;

