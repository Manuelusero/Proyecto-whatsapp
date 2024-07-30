import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ContentChats from "../../Components/ContentChats/ContentChats";
import Message from "../../Components/Message/Message";
import MessageForm from "../../Components/MessageForm/MessageForm";
import DATA_MOCK from "../../data/data";

const Chat = () => {
  const { id } = useParams();

  const currentChat = DATA_MOCK.DATA_MOOK.find(
    (chat) => chat.id === parseInt(id)
  );

  if (!currentChat) {
    return <div>Chat no encontrado</div>;
  }

  const { nombre, mensajes } = currentChat;

  const [memoryMsg, setMemoryMsg] = useState(mensajes);

  const handleSubmit = (e, textValue) => {
    e.preventDefault();

    setMemoryMsg([
      ...memoryMsg,
      {
        author: "yo",
        content: textValue,
        date: "ahora",
        status: "enviado",
        id: memoryMsg.length + 1,
      },
    ]);
  };
  return (
    <>
      <ContentChats nombre={nombre} thumbnail={currentChat.thumbnail} id={id} />
      <Message memoryMsg={memoryMsg} />
      <MessageForm handleSubmit={handleSubmit} />
    </>
  );
};
export default Chat;
