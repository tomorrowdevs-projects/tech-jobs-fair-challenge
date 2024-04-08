import React, { useEffect, useState } from "react"
import DropdownFilters from "../UI/DropdownFilters"
import ContactsList from "./ContactsList"
import Searchbar from "./Searchbar"
import TableNavigation from "./TableNavigation"
import ContactAddModal from "../ContactAddModal/ContactAddModal"

const ContactPage = ({ query }) => {
    const [contacts, setContacts] = useState([])
    const [filter, setFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const [pageIndex, setIndex] = useState(currentPage + 1)
    const [totalContacts, setTotalContacts] = useState(0) // Numero totale di contatti
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const pageSize = 10 // Numero di contatti per pagina

    useEffect(() => {
        const ws = new WebSocket(
            // "wss://tjf-challenge.azurewebsites.net/web/ws/send"
            "ws://tjf-challenge.azurewebsites.net:1402"
        )

        ws.onopen = () => {
            console.log("WebSocket connected!")
            // Qui puoi inviare un messaggio al server se necessario
            ws.send(
                JSON.stringify({
                    message: "string",
                    personId: "string",
                })
            )
        }

        ws.onmessage = (event) => {
            // Gestire i messaggi ricevuti dal server
            const message = JSON.parse(event.data)
            console.log("Message from server ", message)
            if (message.type === "update") {
                // Aggiorna i tuoi contatti qui
                setContacts(message.payload)
            }
        }

        ws.onerror = (error) => {
            console.error("WebSocket error:", error)
        }

        ws.onclose = () => {
            console.log("WebSocket disconnected")
        }

        return () => {
            ws.close()
        }
    }, [])

    return (
        <section className="bg-vivid dark:bg-vivid p-3 sm:p-5 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div
                    className="bg-neutral dark:bg-vivid relative shadow-md sm:rounded-lg overflow-hidden"
                    style={{ minHeight: "650px" }}
                >
                    <div className="container bg-neutral dark:bg-vivid flex flex-wrap justify-between p-4">
                        <div className="flex flex-col sm:flex-row w-full sm:w-auto">
                            <Searchbar
                                filter={filter}
                                setTotalContacts={setTotalContacts}
                                setContacts={setContacts}
                            />
                            <DropdownFilters
                                filter={filter}
                                setFilter={setFilter}
                            />
                        </div>
                        <div className="flex justify-center sm:justify-end mt-4 sm:mt-0">
                            <button
                                id="add-product"
                                aria-expanded="true"
                                aria-haspopup="true"
                                type="button"
                                onClick={() => setIsAddModalOpen(true)}
                                className="flex items-center justify-center text-neutral bg-subdue hover:vivid focus:ring-4 focus:ring-vivid font-medium rounded-lg text-sm px-4 py-2 dark:subdue dark:hover:vivid focus:outline-none dark:focus:ring-vivid"
                            >
                                <svg
                                    className="h-3.5 w-3.5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    />
                                </svg>
                                Add Contact
                            </button>
                        </div>
                    </div>
                    <div
                        className="overflow-x-auto"
                        style={{ minHeight: "500px" }}
                    >
                        <table className="w-full text-sm text-left text-vivid dark:text-neutral">
                            <thead className="text-xs text-neutral uppercase bg-subdue dark:bg-subdue dark:text-neutral">
                                <tr>
                                    <th scope="col" className="px-4 py-3">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Address
                                    </th>
                                    <th
                                        scope="col hidden lg:flex"
                                        className="px-4 py-3"
                                    >
                                        Social Account
                                    </th>
                                    <th
                                        scope="col hidden lg:flex"
                                        className="px-4 py-3"
                                    >
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <ContactsList
                                contacts={contacts}
                                currentPage={currentPage}
                                pageSize={pageSize}
                                setContacts={setContacts}
                            />
                        </table>
                    </div>
                    <TableNavigation
                        totalContacts={totalContacts}
                        setTotalContacts={setTotalContacts}
                        pageIndex={pageIndex}
                        setIndex={setIndex}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        setContacts={setContacts}
                    />
                </div>
            </div>
            {isAddModalOpen && (
        <ContactAddModal
          modalToggle={isAddModalOpen}
          setModalToggle={setIsAddModalOpen}
        />
      )}
        </section>
    )
}

export default ContactPage
