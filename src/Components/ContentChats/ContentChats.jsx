import React from "react";
import "./ContentChats.css";
import { Link } from "react-router-dom";

const ContentChats = ({ nombre, thumbnail }) => {
  return (
    <>
      {/* <div>{nombre}</div> */}
      <div className="content-chats">
        <div className="info-contact">
          <Link to="/">
            <i className="bi bi-arrow-left"></i>
          </Link>
          <div className="img-container">
            <img src={thumbnail} alt="user-pic" className="user-pic" />
          </div>
          <span className="user-name">{nombre}</span>
          <div className="icons">
            <i className="bi bi-telephone"></i>
            <i className="bi bi-camera-video"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentChats;
