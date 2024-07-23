import React, { useState } from 'react';
import Message from './Components/Message/Message';
import MessageForm from './Components/MessageForm/MessageForm';
import ContentChats from './Components/ContentChats/ContentChats';



const DATA_MOOK = [
  {
    author: 'pepe',
    content: 'Hola?',
    date: 'ayer a 15:34',
    status: 'visto',
    id: 1
  },
  {
    author: 'yo',
    content: 'Sos real OMG',
    date: 'ayer a 15:35',
    status: 'visto',
    id: 2
  },
  {
    author: 'pepe',
    content: 'Obviamente, acaso lo dudaste?',
    date: 'ayer a 15:36',
    status: 'visto',
    id: 3
  },
  {
    author: 'yo',
    content: 'Jamas.',
    date: 'ayer a 15:37',
    status: 'entregado',
    id: 4
  }
];

const App = () => {
  const [message, setMessages] = useState(DATA_MOOK);

  const handleSendMessage = (newMessage) => {
    newMessage.status = 'entregado';
    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages, newMessage];
      setTimeout(() => generateAutoReply(newMessage), 1000);
      return updatedMessages;
    });
  };

  const generateAutoReply = (incomingMessage) => {
    const autoReply = {
      author: 'pepe',
      content: `Recibi tu mensaje: "${incomingMessage.content}"`,
      status: 'visto',
      date: `hoy a ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      id: Date.now() + 1
    };

    setMessages(prevMessages => [...prevMessages, autoReply]);
  }

  return (

    <div>
      <ContentChats messages={message} />
      <Message messages={message} />
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
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