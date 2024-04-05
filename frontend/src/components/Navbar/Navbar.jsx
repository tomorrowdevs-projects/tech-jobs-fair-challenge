import DropdownAvatar from "./../UI/DropdownAvatar"
const Navbar = () => {
    return (
        <header className="antialiased">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                        <a href="https://flowbite.com" className="flex mr-4">
                            <img className="mr-3 h-8" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
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
                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        >
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">
                                    name@flowbite.com
                                </div>
                            </div>
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="avatarButton"
                            >
                                <li>
                                    <a
                                        href="/"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
