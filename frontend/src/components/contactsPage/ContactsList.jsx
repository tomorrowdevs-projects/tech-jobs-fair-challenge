import { useCallback, useEffect } from "react"
import DropdownContact from "./../UI/DropdownContact"
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

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const data = await response.json()
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
                <>
                    <tr
                        className="border-b dark:border-gray-700 cursor-pointer"
                        key={`item-${i}`}
                    >
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {contact.firstname}
                        </th>
                        <td className="px-4 py-3">{contact.lastname}</td>
                        <td className="px-4 py-3">{contact.phoneNumber}</td>
                        <td className="px-4 py-3">{contact.address}</td>
                        <td className="px-4 py-3">{contact.socialAccount}</td>
                        <td className="px-4 py-3 flex items-center justify-end">
                            <DropdownContact />
                        </td>
                    </tr>
                </>
            ))}
        </tbody>
    )
}
export default ContactList
