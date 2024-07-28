import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = ({ contact }) => {
  const { nombre, ultima_conexion, thumbnail } = contact;
  console.log(thumbnail);
  return (
    <div className="contact-item">
      <Link to={`/chat/${contact.id}`} className="contact-link">
        <div className="contact-info">
          <img src={thumbnail} alt={nombre} className="contact-thumbnail" />
          <div className="contact-name">{nombre}</div>
          <div className="last-seen">{ultima_conexion} </div>
        </div>

      </Link>
    </div>
  );
};

export default Contact;
