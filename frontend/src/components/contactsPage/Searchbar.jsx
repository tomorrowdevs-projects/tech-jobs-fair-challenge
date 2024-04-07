import { useState } from "react"
const Searchbar = (props) => {
    const { setResult, filter } = props
    const [query, setQuery] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `https://tjf-challenge.azurewebsites.net/web/people/list?firstname=${query}`
            )

            if (!response.ok) {
                throw new Error(`Errore nella richiesta: ${response.status}`)
            }

            const data = await response.json()

            setResult(data)
        } catch (errore) {
            console.error("Errore durante la ricerca:", errore.message)
        }
    }
    return (
        <form className="flex items-center" onSubmit={handleSearch}>
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-subdue dark:text-neutral"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-neutral border border-subdue text-vivid text-sm outline-none rounded-lg focus:ring-subdue focus:border-vivid block w-full pl-10 p-2 dark:bg-vivid dark:border-subdue dark:placeholder-neutral dark:text-white dark:focus:ring-subdue dark:focus:border-subdue"
                    placeholder="Search"
                    required=""
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </form>
    )
}
export default Searchbar
