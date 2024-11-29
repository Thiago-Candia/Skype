import React from 'react'
import '../Styles/Styles.css'
import { Icons } from '../Assets/Icons/Icons'

const SearchChat = () => {
return (
    <div className='search-chat-box'>
        <div className='inputBox-search-chat'>
            <form action="">
                <input 
                    type="text" 
                    className='input-search-chat'
                    placeholder='Contactos, grupos, mensajes'
                    />
                <i><Icons.MagnifyingGlass/></i>
            </form>
        </div>
        <div>
            <button className='btn-config btn-numpad'>
                <i><Icons.Numpad/></i>
            </button>
        </div>
    </div>
)
}

export default SearchChat