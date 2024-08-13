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

  const { name, thumbnail } = currentChat;

  return (
    <div className="info-container">
      <div className="info-header-container">
        <div className="title-container">
          <Link to={`/chat/${id}`}>
            <i className="bi bi-arrow-left"></i>
          </Link>
          {/* <p className="title">Info del contacto</p> */}
        </div>
        <div className="image-container">
          <img src={thumbnail} alt="" className="image" />
        </div>
        <div className="name-container">{name}</div>
        <div className="options-container">
          <div className="call-container">
            <i className="bi bi-telephone"></i>
            <span>Llamar</span>
          </div>
          <div className="video-container">
            <i className="bi bi-camera-video"></i>
            <span>Video</span>
          </div>
          <div className="search-container">
            <i className="bi bi-search"></i>
            <span>Buscar</span>
          </div>
        </div>
      </div>
      <div className="settings">
        <div className="settings-container">
          <div className="notifications-container">
            <i className="bi bi-bell"></i>
            <h4>Notificaciones</h4>
          </div>
          <div className="visibility-container">
            <i className="bi bi-card-image"></i>
            <h4>Visibilidad de archivos multimedia</h4>
          </div>
          <div className="security-container">
            <i className="bi bi-star"></i>
            <h4>Mensajes destacados</h4>
          </div>
        </div>
      </div>
      <div className="actions-container">
        <div className="add-to-favorites">
          <i className="bi bi-heart"></i>
          <p>Añadir a favoritos</p>
        </div>
        <div className="block-contact">
          <i className="bi bi-ban"></i>
          <p>Bloquear a este contacto</p>
        </div>
        <div className="report-contact">
          <i className="bi bi-hand-thumbs-down"></i>
          <p>Reportar a este contacto</p>
        </div>
      </div>
    </div>
  );
};

export default InfoContact;
