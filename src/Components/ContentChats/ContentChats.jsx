import React from "react";
import "./ContentChats.css";
import { Link } from "react-router-dom";

const ContentChats = ({ nombre, thumbnail }) => {
  return (

    <div id="chats-container" className="content-chats">
      <div className="info-contact">
        <Link to="/">
          <i className="bi bi-arrow-left"></i>
        </Link>
        <div className="img-container">
          <img src={thumbnail} alt="user-pic" className="user-pic" />
        </div>
        <Link to={`/info-contact/${nombre}`}>
          <span className="user-name">{nombre}</span>
        </Link>
        <div className="icons">
          <i className="bi bi-camera-video"></i>
          <i className="bi bi-telephone"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

    </div>

  );
};

export default ContentChats;
