import DropdownAvatar from "./../UI/DropdownAvatar"
const Navbar = () => {
    return (
        <header className="antialiased">
            <nav className="bg-neutral border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-subdue">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                        <button
                            aria-expanded="true"
                            aria-controls="sidebar"
                            className="p-2 mr-2 text-vivid rounded-lg cursor-pointer lg:hidden hover:text-vivid hover:bg-neutral focus:bg-neutral dark:focus:bg-gray-700 focus:ring-2 focus:ring-neutral dark:focus:ring-subdue dark:text-neutral dark:hover:bg-subdue dark:hover:text-white"
                        >
                            <svg
                                className="w-[18px] h-[18px]"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                            <span className="sr-only">Toggle sidebar</span>
                        </button>
                        <a href="https://flowbite.com" className="flex mr-4">
                            <img
                                src="https://flowbite.s3.amazonaws.com/logo.svg"
                                className="mr-3 h-8"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-neutral">
                                TechSolutions Inc.{" "}
                            </span>
                        </a>
                        <form
                            action="#"
                            method="GET"
                            className="hidden lg:block lg:pl-2"
                        >
                            <label htmlFor="topbar-search" className="sr-only">
                                Search
                            </label>
                        </form>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <DropdownAvatar />

                        <div
                            id="avatarButton"
                            className="z-10 hidden bg-neutral divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-vivid dark:divide-subdue"
                        >
                            <div className="px-4 py-3 text-sm text-vivid dark:text-neutral">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">
                                    name@flowbite.com
                                </div>
                            </div>
                            <ul
                                className="py-2 text-sm text-vivid dark:text-neutral"
                                aria-labelledby="avatarButton"
                            >
                                <li>
                                    <a
                                        href="/"
                                        className="block px-4 py-2 hover:bg-neutral dark:hover:bg-subdue dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="block px-4 py-2 hover:bg-neutral dark:hover:bg-subdue dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="block px-4 py-2 hover:bg-neutral dark:hover:bg-subdue dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-subdue hover:bg-neutral dark:hover:bg-subdue dark:text-neutral dark:hover:text-white"
                                >
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
