import React from "react";
import { Link } from "react-router-dom";

const Contacts = ({ DATA_MOOK }) => {

  console.log(DATA_MOOK);  // Añade esta línea para depuración

  const contactList = DATA_MOOK.DATA_MOOK.map((contact) => {
    return (
      <div
        key={contact.id}
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      >
        <Link to={`/chat/${contact.id}`}>{contact.nombre}</Link>
      </div>
    );
  });

  return <div>{contactList}</div>;
};


export default Contacts;
