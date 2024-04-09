import { useEffect, useState } from "react"
import { usePage } from "../../context/PageContext"
import useContacts from "../../hooks/fetchData"

const TableNavigation = () => {
    const { currentPage, setCurrentPage, pageIndex, setIndex } = usePage()

    const pageSize = 10 // Numero di contatti per pagina

    const [selected, setSelected] = useState(false)

    const { totContacts, fetchContacts } = useContacts(currentPage)

    useEffect(() => {
        fetchContacts()
    }, [fetchContacts])

    // Funzione per gestire il cambio di pagina
    const handlePageChange = (pageNumberIndex, pageNumber) => {
        setCurrentPage(pageNumber)
        setIndex(pageNumberIndex) // Imposta il numero di pagina corrente
        setSelected(true) // Imposta il bottone come cliccato
    }

    // Funzione per generare i pulsanti delle pagine
    const generatePageButtons = () => {
        const totalPages = Math.ceil(totContacts / pageSize)
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li key={i}>
                    <button
                        className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-subdue dark:bg-vivid border border-subdue dark:focus:bg-vivid dark:focus:text-white focus:outline-none ${
                            pageIndex === i
                                ? "bg-neutral hover:bg-neutral hover:text-vivid dark:bg-subdue dark:border-subdue dark:text-white"
                                : "bg-dark hover:bg-neutral hover:text-vivid dark:bg-slate-800 dark:border-subdue dark:text-neutral dark:hover:bg-vivid dark:focus:bg-vivid dark:hover:text-white"
                        }`}
                        onClick={() => handlePageChange(i, i - 1)}
                    >
                        {i}
                    </button>
                </li>
            )
        }
        return pages
    }
    return (
        <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
        >
            <span className="text-sm font-normal text-vivid dark:text-neutral m-2">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white m-2">
                    {Math.min(pageIndex * pageSize, totContacts)}
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white m-2">
                    {totContacts}
                </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
                <li>
                    <button
                        className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 text-subdue bg-dark border-subdue rounded-l-lg border dark:bg-vivid dark:border-subdue dark:text-neutral hover:border-gray-300 focus:outline-none ${
                            pageIndex === 1
                                ? "cursor-not-allowed"
                                : "bg-dark text-subdue hover:bg-neutral hover:text-subdue dark:bg-slate-800 dark:border-subdue dark:text-neutral dark:hover:bg-subdue dark:focus:bg-vivid dark:hover:text-white"
                        } `}
                        onClick={() =>
                            handlePageChange(pageIndex - 1, currentPage - 1)
                        }
                        disabled={pageIndex === 1}
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </li>
                {generatePageButtons()}
                <li>
                    <button
                        className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight text-subdue bg-dark border-subdue rounded-r-lg dark:focus:bg-vivid border hover:border-gray-300 focus:outline-none ${
                            pageIndex === Math.ceil(totContacts / pageSize)
                                ? "cursor-not-allowed"
                                : "bg-dark hover:bg-neutral hover:text-subdue dark:bg-slate-800 dark:border-subdue dark:text-neutral dark:hover:bg-vivid dark:focus:bg-vivid dark:hover:text-white"
                        } ${
                            selected
                                ? " bg-dark text-subdue dark:bg-slate-800 dark:border-subdue dark:text-neutral dark:hover:bg-vivid dark:focus:bg-vivid dark:hover:text-white"
                                : ""
                        }`}
                        onClick={() =>
                            handlePageChange(pageIndex + 1, currentPage + 1)
                        }
                        disabled={
                            pageIndex === Math.ceil(totContacts / pageSize)
                        }
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default TableNavigation
