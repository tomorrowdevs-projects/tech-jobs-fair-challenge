import { useCallback, useEffect } from "react"

const ContactList = (props) => {
    const { contacts, setContacts } = props

    const getContacts = useCallback(async () => {
        try {
            const response = await fetch(
                `https://tjf-challenge.azurewebsites.net/web/people/list`,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    method: "POST",

                    body: JSON.stringify({}),
                }
            )
            console.log("RISPOSTA", response.body)
            // Check if the response is JSON
            const contentType = response.headers.get("content-type")
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            } else if (
                !contentType ||
                !contentType.includes("application/json")
            ) {
                throw new Error("Received non-JSON response from server")
            }

            const data = await response.json()
            console.log("data", data)
            setContacts(data.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }, [setContacts])

    useEffect(() => {
        getContacts()
    }, [getContacts])

    return (
        <tbody>
            {contacts.map((contact, i) => (
                <tr className="border-b dark:border-gray-700" key={`item-${i}`}>
                    <th
                        scope="row"
                        className="px-4 py-3 font-medium text-vivid whitespace-nowrap dark:text-white"
                    >
                        {contact.firstname}
                    </th>
                    <td className="px-4 py-3">{contact.lastname}</td>
                    <td className="px-4 py-3">{contact.role}</td>
                    <td className="px-4 py-3">{contact.contactType}</td>
                    <td className="px-4 py-3">{contact.address}</td>
                    <td className="px-4 py-3 flex items-center justify-end">
                        <button
                            id="apple-imac-27-dropdown-button"
                            data-dropdown-toggle="apple-imac-27-dropdown"
                            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-subdue hover:text-vivid rounded-lg focus:outline-none dark:text-neutral dark:hover:text-white"
                            type="button"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                        <div
                            id="apple-imac-27-dropdown"
                            className="hidden z-10 w-44 bg-neutral rounded divide-y divide-subdue shadow dark:bg-vivid dark:divide-subdue"
                        >
                            <ul
                                className="py-1 text-sm text-vivid dark:text-neutral"
                                aria-labelledby="apple-imac-27-dropdown-button"
                            >
                                <li>
                                    <a
                                        href="/"
                                        className="block py-2 px-4 hover:bg-neutral dark:hover:bg-subdue dark:hover:text-white"
                                    >
                                        Show
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="block py-2 px-4 hover:bg-neutral dark:hover:bg-subdue dark:hover:text-white"
                                    >
                                        Edit
                                    </a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a
                                    href="/"
                                    className="block py-2 px-4 text-sm text-vivid hover:bg-neutral dark:hover:bg-subdue dark:text-neutral dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}
export default ContactList
