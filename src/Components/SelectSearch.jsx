import React from 'react'
import '../Styles/styles.css'
import { Icons } from '../Assets/Icons/Icons'

const SelectSearch = () => {
    return (
    <div className='select-search'>
        <div className='select-search-box'>
            <button className='btn-config btn-selectSearch'>
                <i><Icons.Notification/></i>
                <span className='text'>Chats</span>
            </button>
        </div>
        <div className='select-search-box'>
            <button className='btn-config btn-selectSearch'>
                <i><Icons.VideoCamera/></i>
                <span className='text'>Llamadas</span>
            </button>
        </div>
        <div className='select-search-box'>
            <button className='btn-config btn-selectSearch'>
                <i><Icons.BookContact/></i>
                <span className='text'>Contactos</span>
            </button>
        </div>
        <div className='select-search-box'>
            <button className='btn-config btn-selectSearch'>
                <i><Icons.ChatGlobe/></i>
                <span className='text'>Notificaciones</span>
            </button>
        </div>
    </div>
    ) 
}

export default SelectSearch