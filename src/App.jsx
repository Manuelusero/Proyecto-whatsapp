import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Chat from "./Pages/chat/Chat";

const App = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </div>
    </>
  );
};
//   return (
//     <div className="App">
//       <div className='imgPerfil'></div>
//       <h1>Messi</h1>
//       <div className="chat">
//         {message.map(mensaje => (
//           <Message
//             key={mensaje.id}
//             author={mensaje.author}
//             content={mensaje.content}
//             date={mensaje.date}
//             status={mensaje.status}
//           />
//         ))}
//       </div>
//       <MessageForm onSendMessage={handleSendMessage} />
//     </div>
//   );
// };

export default App;
