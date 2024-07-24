import React from "react";
import "./ContentChats.css";

const ContentChats = ({ nombre }) => {
  return (
    <div className="content-chats">
      <div className="info-contact">
        <i className='"bi bi-chevron-left"'></i>
        <img
          src="/src/assets/Images/icononoguardado.avif"
          alt="user-pic"
          className="user-pic"
        />
        <span className="user-name">{nombre}</span>
        <div className="icons">
          <i className="bi bi-telephone"></i>
          <i className="bi bi-camera-video"></i>
        </div>
      </div>
    </div>
  );
};

export default ContentChats;
