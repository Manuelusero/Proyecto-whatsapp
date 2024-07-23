import React from 'react'
import Message from '../Message/Message'
import './ContentChats.css'

const ContentChats = ({ messages }) => {
    return (
        <div className='content-chats'>
            <div className='info-contact'>
                <i className='"bi bi-chevron-left"'></i>
                <img src="/src/assets/Images/icononoguardado.avif" alt="user-pic" className='user-pic' />
                <span className='user-name'>Messi</span>
                <div className='icons'>
                    <i className='bi bi-telephone'></i>
                    <i className='bi bi-camera-video'></i>
                </div>
            </div>

            <div className='messages'>
                {messages.map(({ id, author, content, date, status }) =>
                (<Message
                    key={id}
                    author={author}
                    content={content}
                    date={date}
                    status={status}
                />

                ))}

            </div>
        </div>
    );
}

export default ContentChats;
