import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Chat from "./Pages/chat/Chat";
import InfoContact from "./Pages/info-contact/InfoContact";

const App = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/info-contact/:id" element={<InfoContact />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
