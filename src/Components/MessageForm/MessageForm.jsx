import React, { useState } from "react";
import "/src/Components/ContentChats/ContentChats.css";

const MessageForm = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      handleSubmit(event, inputValue);
      setInputValue("");
    }
  };
  return (
    <form className="write-message" onSubmit={onSubmit}>
      <div className="content-input">
        <button className="btn-adjunt" type="button">
          <i className="bi bi-paperclip"></i>
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Mensaje"
        ></input>
        <i className="bi bi-emoji-smile icono-emoji"></i>
      </div>
      <button className="btn-send" type="submit">
        <i className="bi bi-send-fill icono-enviar"></i>
      </button>
    </form>
  );
};

export default MessageForm;
