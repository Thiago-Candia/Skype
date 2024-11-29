import React, { useState } from 'react'
import '../Styles/styles.css'
import { Icons } from '../Assets/Icons/Icons'



const NewMessage = ({onSendMessage}) => {

const [inputValue, setInputValue] = useState('')

const handleChange = (event) => {
    setInputValue(event.target.value)
}

/* si el campo de texto no esta vacio inputValue.replace() (elimina los espacios).
Si hay texto, llama a onSendMessage(inputValue) para enviar el mensaje al componente padre.
usa setInputValue para limpiar el input de texto */
const handleSend = () => {
    if(inputValue.replace()){
        onSendMessage(inputValue)
        setInputValue('')
    }
}

    return (
        <div>
            <div className='new-message'>
                <div className='input-box'>
                    <button className='btn-config btn-emoji-smile'>
                        <i>
                            <Icons.SmileEmoji/>
                        </i>
                    </button>
                    <input 
                        id=''
                        type="text" 
                        className='input-message'
                        value={inputValue}
                        placeholder='Escribe un mensaje' 
                        onChange={handleChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button className='btn-config btn-pen'>
                        <i>
                            <Icons.Pencil/>
                        </i>
                    </button>
                </div>
                <div className='btn-section'>
                    <button className='btn-config'>
                        <i>
                            <Icons.DocumentImg/>
                        </i>
                    </button>
                    <button className='btn-config'>
                        <i>
                            <Icons.Microphone/>
                        </i>
                    </button>
                    <button className='btn-config'>
                        <i>
                            <Icons.ContactEmail/>
                        </i>
                    </button>
                    <button className='btn-config'>
                        <i>
                            <Icons.Options />
                        </i>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default  NewMessage