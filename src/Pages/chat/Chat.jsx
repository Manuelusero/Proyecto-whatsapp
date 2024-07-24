import React, { useState } from "react";
import { ContentChats } from "../../Components";
import { useParams } from "react-router-dom";
import { obtenerDatosPorId } from "../../helpers/mensajes";
import Message from "../../Components/Message/Message";
import MessageForm from "../../Components/MessageForm/MessageForm";

const Chat = () => {
  const parametros = useParams();

  const { nombre, humbnail, ultima_conexion, id, mensajes } = obtenerDatosPorId(
    parametros.id
  );

  const [memoryMsj, setMemoryMsj] = useState(mensajes);

  const handleSubmit = (e, textValue) => {
    e.preventDefault();

    setMemoryMsj([
      ...memoryMsj,
      {
        author: "yo",
        content: textValue,
        date: "ahora",
        status: "enviado",
        id: memoryMsj.length + 1,
      },
    ]);
  };
  return (
    <>
      <ContentChats nombre={nombre} />
      <Message memoryMsg={memoryMsj} />
      <MessageForm handleSubmit={handleSubmit} />
    </>
  );
};
export default Chat;
