import React from 'react'
import DATA_MOOK from '../../data/data'
import { ContentChats } from '../../Components'
import { useParams } from 'react-router-dom';

const InfoContact = () => {
    const { id } = useParams();
    const contact = DATA_MOOK.DATA_MOOK.find(contact => contact.id === id);

    if (!contact) {
        return <div>Contacto no encontrado</div>;
    }

    return (
        <div>
            <h1>Info Contacto</h1>
            <ContentChats
                nombre={contact.nombre}
                thumbnail={contact.thumbnail}
            />
        </div>
    );
}




export default InfoContact
