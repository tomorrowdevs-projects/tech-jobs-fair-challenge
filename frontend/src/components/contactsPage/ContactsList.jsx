import { useCallback, useEffect, useState } from "react"
import DropdownContact from "./../UI/DropdownContact"
import { RotatingLines } from "react-loader-spinner"
const ContactList = (props) => {
    const { contacts, setContacts } = props
    const [loading, setLoading] = useState(true)

    const getContacts = useCallback(async () => {
        try {
            const response = await fetch(
                `https://tjf-challenge.azurewebsites.net/web/people/list`,
                {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5YmQzOGYxOC1lNjBjLTQ4NDItODFlMS0zMGZiZTY0NjA1YWYiLCJpYXQiOjE3MTIzOTAzMjQsImlkIjoiYTFjMTZmZjctZGY5YS00MWZiLWIyMjgtMjQwYTRjOTc0NjE2IiwiZnVsbG5hbWUiOiJBZG1pbiBUSkYtQ2hhbGxlbmdlIiwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUtaWQiOiIyMjJjZmY5ZC0xZjJkLTRmNWYtYmEyYi05YzUxOTgzYmQ0MGQiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE3MTIzOTAzMjQsImV4cCI6MTcxMjM5MTIyNCwiaXNzIjoiVG9tb3Jyb3dEZXZzIiwiYXVkIjoiVG9tb3Jyb3dEZXZzIn0.9Khnd5I6nb7zm3RLvf79rLb4ttj5UP53xjDKlLoSwH4",
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
        } finally {
            setLoading(false)
        }
    }, [setContacts])

    useEffect(() => {
        getContacts()
    }, [getContacts])

    return loading ? (
        <RotatingLines height="80" width="80" radius="9" color="blue" />
    ) : (
        <tbody>
            {contacts.map((contact, i) => (
                <tr
                    key={`item-${i}`} // Key is correctly placed here
                    className="border-b border-subdue dark:border-subdue"
                >
                    <th
                        scope="row"
                        className="px-4 py-3 font-medium text-vivid whitespace-nowrap dark:text-white"
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
            ))}
        </tbody>
    )
}
export default ContactList
