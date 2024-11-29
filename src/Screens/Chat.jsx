import React, { useEffect, useState } from "react"
import "../Styles/styles.css"
import { MessageList, NavbarUser, NewMessage, SectionProfile, SearchChat, SelectSearch, AddChat, ChatList, OrderChat, HomeSection } from "../Components"
import { useParams } from "react-router-dom"
import contacts from "../Data/contacts"
import { getFormattedDateMMHHDDMM } from "../Helpers/date"

const Chat = () => {

    const { contact_id } = useParams()

    const [selectedContact, setSelectedContact] = useState(null)

    const [messages, setMessages] = useState([])

    const [isMobile, setIsMobile] = useState(null)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const storedContactId = localStorage.getItem("selectedContact");
        if (storedContactId && !contact_id) {
            setSelectedContact(contacts.find(contact => contact.id == storedContactId));
        }
    }, [])

    useEffect(() => {
        const foundContact = contacts.find(contact => contact.id == contact_id);
        setSelectedContact(foundContact);

        if (foundContact) {
            const storedMessages = localStorage.getItem(`messages_${foundContact.id}`)
            setMessages(
                storedMessages 
                ? JSON.parse(storedMessages) 
                : foundContact.mensajes || []
            )
        }

        if (contact_id) {
            localStorage.setItem("selectedContact", contact_id)
        }
    }, [contact_id])

    useEffect(() => {
        if (selectedContact) {
            localStorage.setItem(`messages_${selectedContact.id}`, JSON.stringify(messages))
        }
    }, [messages, selectedContact])

    const handleSendNewMessage = (text) => {
        const newMessage = {
            emisor: "Tu",
            texto: text,
            hora: getFormattedDateMMHHDDMM(),
            id: messages.length + 1,
        }
        setMessages([...messages, newMessage])
    }

    return (
        <main className="container">
            {!isMobile && (
                <aside className="sidebar-desktop">
                    <SectionProfile />
                    <SearchChat />
                    <SelectSearch />
                    <AddChat />
                    <OrderChat />
                    <ChatList />
                </aside>
            )}
            {isMobile && !selectedContact && (
                <aside className="sidebar-mobile">
                    <SectionProfile />
                    <SearchChat />
                    <SelectSearch />
                    <AddChat />
                    <OrderChat />
                    <ChatList />
                </aside>
            )}
            <section className="main-content">
                {selectedContact 
                ?(
                    <>
                        <div className="messages-header">
                            <NavbarUser selectedContact={selectedContact} />
                        </div>
                        <div className="messages-body">
                            <MessageList messages={messages} usuarioActual={selectedContact} />
                        </div>
                        <div className="messages-new-message">
                            <NewMessage onSendMessage={handleSendNewMessage} />
                        </div>
                    </>
                ) 
                :(
                    !isMobile && <HomeSection />
                )}
            </section>
        </main>
    )
}

export default Chat
