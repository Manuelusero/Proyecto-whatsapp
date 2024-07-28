import React from "react";

import DATA_MOOK from "../../data/data";
import "./Home.css";
import { ListContact } from "../../Components";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">WhatsApp <i className="bi bi-camera"></i> <i className="bi bi-three-dots-vertical"></i>
      </div>
      <ListContact DATA_MOOK={DATA_MOOK} />
    </div>
  );
};

export default Home;
