import React from "react"
import { Link } from "react-router-dom"
import contacts from "../Data/contacts"
import "../Styles/styles.css"

const ChatList = () => {
    return (
        <div className="chat-list">
            {contacts.map((contact) => {
                const lastMessage = contact.mensajes[contact.mensajes.length - 1]
                return (
                    <Link
                        to={'/chat/' + contact.id}
                        key={contact.id}
                        className="chat-list-user"
                    >
                        <button className="btn-config btn-contact">
                            <div className="contact-box-img">
                                <img src={contact.img} alt="" className="contact-img" />
                            </div>
                            <div className="contact-info">
                                <h3 className="text">{contact.nombre}</h3>
                                <p className="text">
                                    {lastMessage?.texto || 'Sin mensajes'}
                                </p>
                            </div>
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}

export default ChatList
