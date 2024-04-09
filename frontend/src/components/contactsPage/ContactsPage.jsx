import React, { useEffect, useState } from "react"
import { DotLoader } from "react-spinners"
import { usePage } from "../../context/PageContext"
import useContacts from "../../hooks/fetchData"
import ContactAddModal from "../ContactAddModal/ContactAddModal"
import DropdownFilters from "../UI/DropdownFilters"
import ContactsList from "./ContactsList"
import Searchbar from "./Searchbar"
import TableNavigation from "./TableNavigation"

const ContactPage = () => {
    const [filter, setFilter] = useState("")
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const { currentPage } = usePage()

    const { setLocalContacts, setLoading, loading } = useContacts(currentPage)
    //WebSocket coinnection
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
                setLocalContacts(message.payload)
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
    }, [setLocalContacts])
    //Useeffect to simulate loading fetching data
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [setLoading])

    return (
        <section className="bg-vivid dark:bg-vivid p-3 sm:p-5 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div
                    className="bg-neutral dark:bg-vivid relative shadow-md sm:rounded-lg overflow-hidden"
                    style={{ minHeight: "650px" }}
                >
                    <div className="container bg-neutral dark:bg-vivid flex flex-wrap justify-between p-4">
                        <div className="flex flex-col sm:flex-row w-full sm:w-auto">
                            <Searchbar filter={filter} />
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
                        {loading ? (
                            <div className="flex items-center justify-center min-h-[500px]">
                                <DotLoader color="#3d6098" />
                            </div>
                        ) : (
                            <table className="w-full text-sm text-left text-vivid dark:text-neutral">
                                <thead className="text-xs text-neutral uppercase bg-subdue dark:bg-subdue dark:text-neutral">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">
                                            First Name
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Last Name
                                        </th>
                                        <th
                                            scope="col "
                                            className="hidden md:table-cell px-4 py-3"
                                        >
                                            Phone
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden md:table-cell px-4 py-3"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden lg:table-cell px-4 py-3"
                                        >
                                            Social Account
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">
                                                Actions
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <ContactsList />
                            </table>
                        )}
                    </div>
                    <TableNavigation />
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
