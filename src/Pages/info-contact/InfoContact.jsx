import React from "react";
import "./InfoContact.css";
import { Link, useParams } from "react-router-dom";
import DATA_MOCK from "../../data/data";

const InfoContact = () => {
  const { id } = useParams();
  console.log("id from useParams:", id);

  const currentChat = DATA_MOCK.DATA_MOOK.find(
    (chat) => chat.id === parseInt(id)
  );

  if (!currentChat) {
    return <div>No hay información de contacto disponible</div>;
  }

  const { nombre, thumbnail } = currentChat;

  return (
    <div>
      <div className="title-container">
        <Link to={`/chat/${id}`}>
          <i className="bi bi-arrow-left"></i>
        </Link>
        <p className="title">Info del contacto</p>
      </div>
      <div className="image-container">
        <img src={thumbnail} alt="" className="image" />
      </div>
      <div className="name-container">{nombre}</div>
      <div className="options-container">
        <div className="call-container">
          <i class="bi bi-telephone"></i>
          <span>Llamar</span>
        </div>
        <div>
          <i class="bi bi-camera-video"></i>
          <span>Video</span>
        </div>
        <div>
          <i class="bi bi-search"></i>
          <span>Buscar</span>
        </div>
      </div>
      <div>
        <i class="bi bi-card-image"></i>
        <h4>Archivos multimedia</h4>
      </div>
      <div>
        <i class="bi bi-bell"></i>
        <h4>Notificaciones</h4>
      </div>
      <div>
        <i class="bi bi-lock"></i>
        <h4>Cifrado</h4>
        <p>
          Los mensajes y llamadas estan cifrados de extremo a extremo. Pulsa
          para verificar
        </p>
      </div>
    </div>
  );
};

export default InfoContact;
