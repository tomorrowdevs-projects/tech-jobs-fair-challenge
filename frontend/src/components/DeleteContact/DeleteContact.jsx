const DeleteContact = (props) => {
    const {
        selectedContactId,
        active,
        activeClass,
        noActiveClass,
        customClass,
    } = props
    const handleConfirm = async () => {
        if (window.confirm("Sei sicuro di voler eliminare questo elemento?")) {
            await handleDelete()
        }
    }
    const handleDelete = async () => {
        if (!selectedContactId) {
            console.log("no ID")
            //aggiungere gestione errore
            return
        }
        try {
            const response = await fetch(
                "https://tjf-challenge.azurewebsites.net/web/people/delete",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "DELETE",
                    body: JSON.stringify({
                        data: [
                            {
                                id: selectedContactId,
                            },
                        ],
                    }),
                }
            )
            if (!response) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    return (
        <button
            onClick={handleConfirm}
            className={`${
                active ? activeClass : noActiveClass
            }  ${customClass}`}
        >
            Delete
        </button>
    )
}
export default DeleteContact
