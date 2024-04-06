import Searchbar from "./Searchbar"
import Dropdown from "../UI/DropdownFilters"
import { useState } from "react"
import ContactsList from "./ContactsList"

const ContactPage = () => {
    const [result, setResult] = useState()
    const [contacts, setContacts] = useState([])

    return (
        <section className="bg-vivid dark:vivid p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div
                    className="bg-neutral dark:bg-vivid relative shadow-md sm:rounded-lg overflow-hidden"
                    style={{ minHeight: "650px" }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <Searchbar setResult={setResult} />
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button
                                id="add-product"
                                aria-expanded="true"
                                aria-haspopup="true"
                                type="button"
                                className="flex items-center justify-center text-neutral bg-subdue hover:vivid focus:ring-4 focus:ring-vivid font-medium rounded-lg text-sm px-4 py-2 dark:subdue dark:hover:vivid focus:outline-none dark:focus:ring-vivd"
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
                                Add product
                            </button>
                            <div className="flex items-center space-x-3 w-full md:w-auto">
                                <Dropdown />
                            </div>
                        </div>
                    </div>
                    <div
                        className="overflow-x-auto"
                        style={{ minHeight: "500px" }}
                    >
                        <table className="w-full text-sm text-left text-vivid dark:text-neutral">
                            <thead className="text-xs text-vivid uppercase bg-neutral dark:bg-subdue dark:text-neutral">
                                <tr>
                                    <th scope="col" className="px-4 py-3">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Role
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Phone
                                    </th>
                                    <th
                                        scope="col hidden lg:flex"
                                        className="px-4 py-3"
                                    >
                                        Address
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
                                setContacts={setContacts}
                            />
                        </table>
                    </div>
                    <nav
                        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                        aria-label="Table navigation"
                    >
                        <span className="text-sm font-normal text-vivid dark:text-neutral">
                            Showing
                            <span className="font-semibold text-vivid dark:text-neutral">
                                1-10
                            </span>
                            of
                            <span className="font-semibold text-vivid dark:text-neutral">
                                1000
                            </span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-vivid bg-neutral rounded-l-lg border border-neutral hover:bg-gray-100 hover:text-subdue dark:bg-vivid dark:border-vivid dark:text-neutral dark:hover:bg-slate-800 dark:hover:text-neutral"
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
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-vivid bg-neutral border border-neutral hover:bg-gray-100 hover:text-subdue dark:bg-vivid dark:border-vivid dark:text-neutral dark:hover:bg-vivid dark:hover:text-white"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-vivid bg-white border border-neutral hover:bg-gray-100 hover:text-vivid dark:bg-slate-800 dark:border-subdue dark:text-neutral dark:hover:bg-vivid dark:hover:text-neutral"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    aria-current="page"
                                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-vivid bg-white border border-gray-300 hover:bg-gray-100 hover:text-vivid dark:border-subdue dark:bg-slate-800 dark:text-white dark:hover:bg-vivid dark:hover:text-neutral"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-viivid bg-white border border-gray-300 hover:bg-gray-100 hover:text-vivid dark:bg-slate-800 dark:border-subdue dark:text-white dark:hover:bg-vivid dark:hover:text-neutral"
                                >
                                    ...
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-vivid bg-white border border-gray-300 hover:bg-gray-100 hover:text-vivid dark:bg-slate-800 dark:border-subdue dark:text-white dark:hover:bg-vivid dark:hover:text-neutral"
                                >
                                    100
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-vivid bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-vivid dark:bg-slate-800 dark:border-subdue dark:text-white dark:hover:bg-vivid dark:hover:text-neutral"
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
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default ContactPage
