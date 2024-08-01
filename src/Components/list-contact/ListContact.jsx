// import React from "react";
// import "./ListContact.css";
// import Contact from "../contact/Contact";

// const ListContact = ({ DATA_MOOK }) => {
//   return (
//     <div>
//       {DATA_MOOK.DATA_MOOK.map((contact) => {
//         return <Contact contact={contact} key={contact.id} />;
//       })}
//     </div>
//   );
// };

// export default ListContact;
import React, { useState, useEffect } from "react";
import "./ListContact.css";
import Contact from "../contact/Contact";

const ListContact = ({ DATA_MOOK }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(DATA_MOOK.DATA_MOOK);

  useEffect(() => {
    const results = DATA_MOOK.DATA_MOOK.filter(contact =>
      contact && contact.name && contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(results);
  }, [searchTerm, DATA_MOOK.DATA_MOOK]);

  return (
    <div>
      <input className="search-bar"
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </div>
  );
};

export default ListContact;
