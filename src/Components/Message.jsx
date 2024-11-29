import React from "react"
import '../Styles/styles.css'

const Message = ({ emisor, hora, texto, id, prevEmisor, usuarioActual }) => {
    const showEmisorInfo = emisor !== prevEmisor
    const showImgUser = emisor !== prevEmisor

    return (
        <div className={`chat-message ${emisor === 'Tu' ? 'right' : 'left'}`}>
            {showEmisorInfo && (
                <div className="message-info">
                    <span className="emisor-name text">
                        {emisor === 'Tu'
                            ? 'Tu'
                            : usuarioActual.nombre
                        },
                    </span>
                    <span className="time text"> {hora}</span>
                </div>
            )}
            {emisor !== 'Tu' && (
                <div className={`box-img message${emisor === usuarioActual ? 'own' : ''}`}> {showImgUser &&(
                    <img src={usuarioActual.img} alt={`${usuarioActual.nombre} Profile`} />
                )}
                </div>
            )}
            <div className={`emisor ${emisor === 'Tu' ? 'from-me' : 'from-user'}`}>
                <p className="text-msg text">{texto}</p>
            </div>
        </div>
    )
}

export default Message




