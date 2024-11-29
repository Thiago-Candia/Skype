import React from 'react'
import '../Styles/styles.css'
import { Icons } from '../Assets/Icons/Icons'

const AddChat = () => {
    return (
    <div className='add-chat-box'>
        <div className='add-chat-item'>
            <button className='btn-config'>
                <i>
                    <Icons.CameraPerson/>
                </i>
                    <span className='text'>Reunirte ...</span>
                <i>
                    <Icons.Arrowdown />
                </i>
            </button>
        </div>
        <div className='add-chat-item'>
            <button className='btn-config'>
                <i>
                    <Icons.Pencil/>
                </i>
                    <span className='text'>Nuevo chat</span>
                <i>
                    <Icons.Arrowdown />
                </i>
            </button>
        </div>
    </div>
    )
}

export default AddChat