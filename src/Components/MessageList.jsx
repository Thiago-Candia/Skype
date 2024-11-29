import React, { useEffect, useRef } from "react"
import Message from "./Message"
import '../Styles/styles.css'


const MessageList = ({ messages, usuarioActual }) => {
    const messageListRef = useRef(null)
    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])

    const MessageJSX = messages.map((message, index) => {
        return (
            <Message
                emisor={message.emisor}
                hora={message.hora}
                texto={message.texto}
                key={message.id}
                prevEmisor={index > 0 ? messages[index - 1].emisor : null}
                usuarioActual={usuarioActual}
            />
        )
    })

    return (
        <div className="message-list-box" ref={messageListRef}>
            <div className="message-list">
                {MessageJSX}
                <div ref={scrollRef}/>
            </div>
        </div>
    )
}

export default MessageList

