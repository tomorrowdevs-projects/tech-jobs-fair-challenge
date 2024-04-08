import React, { createContext, useContext, useState } from "react"

const ContactModalContext = createContext()

export const useContactModal = () => useContext(ContactModalContext)

export const ContactModalProvider = ({ children }) => {
    const [contactId, setContactId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModalWithContactId = (id) => {
        setContactId(id)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setContactId(null)
    }

    return (
        <ContactModalContext.Provider
            value={{
                isModalOpen,
                contactId,
                openModalWithContactId,
                closeModal,
            }}
        >
            {children}
        </ContactModalContext.Provider>
    )
}
