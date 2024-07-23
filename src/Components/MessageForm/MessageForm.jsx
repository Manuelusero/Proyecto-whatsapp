import React, { useState } from 'react';
import '/src/Components/ContentChats/ContentChats.css'

const MessageForm = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = {
            author: 'yo',
            content: inputValue,
            estado: 'no entregado',
            fecha: `hoy a ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
            hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            id: Date.now(),
        };

        onSendMessage(message);
        setInputValue('');
    };

    return (
        <form className='write-message' onSubmit={handleSubmit}>
            <div className='content-input'>
                <button className='btn-adjunt' type='buttton'>
                    <i className="bi bi-paperclip"></i>
                </button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Escribe un mensaje"
                ></input>
                <i className="bi bi-emoji-smile icono-emoji"></i>
            </div>
            <button className='btn-send' type="submit"><i className="bi bi-send-fill icono-enviar"></i></button>
        </form>
    );
};

export default MessageForm;