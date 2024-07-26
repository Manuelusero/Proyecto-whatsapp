import React from "react";

import "./ListContact.css";
import Contact from "../contact/Contact";

const ListContact = ({ DATA_MOOK }) => {
  return (
    <div>
      {DATA_MOOK.DATA_MOOK.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </div>
  );
};

export default ListContact;
