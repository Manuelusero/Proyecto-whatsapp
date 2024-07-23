import React from 'react';
import './Message.css'

const Message = ({ author, content, date, status }) => {
    const classMessage = author === 'yo' ? 'message-right' : 'message-left';
    const statusMessage = status === 'visto'

    return (
        <div className={`message ${classMessage}`}>
            <span className="author">{author}</span>
            <p className="content">{content}</p>
            <span className="date">{date}</span>
            <span className={classMessage}>
                <i className={statusMessage === 'no entregado' ? "bi bi-check" : "bi bi-check-all"}></i>
            </span>
        </div>
    );
}



export default Message;


// function Mensaje(props) {
//     return (
//         <div className="mensaje">
//             <div className="mensaje-author">{props.author}</div>
//             <div className="mensaje-content">{props.content}</div>
//             <div className="mensaje-date">{props.date}</div>
//             <div className={`mensaje-status ${props.status}`}>{props.status}</div>
//         </div>
//     );
// }

// export default Mensaje;
