import React from "react";
import Contact from "../../Components/contact/Contact";
import DATA_MOOK from "../../data/data";

const Home = () => {
  return (
    <>
      <div>
        <div>Contactos</div>
      </div>
      <Contact DATA_MOOK={DATA_MOOK} />
    </>
  );
};

export default Home;
