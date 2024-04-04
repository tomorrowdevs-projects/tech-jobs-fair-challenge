import avatar from "../../assets/94.jpg"
const Navbar = () => {
    return (
        <header class="antialiased">
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center">
                    <div class="flex justify-start items-center">
                        <button
                            aria-expanded="true"
                            aria-controls="sidebar"
                            class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <svg
                                class="w-[18px] h-[18px]"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                            <span class="sr-only">Toggle sidebar</span>
                        </button>
                        <a href="https://flowbite.com" class="flex mr-4">
                            <image
                                src="https://flowbite.s3.amazonaws.com/logo.svg"
                                class="mr-3 h-8"
                                alt="FlowBite Logo"
                            />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Flowbite
                            </span>
                        </a>
                        <form
                            action="#"
                            method="GET"
                            class="hidden lg:block lg:pl-2"
                        >
                            <label for="topbar-search" class="sr-only">
                                Search
                            </label>
                        </form>
                    </div>
                    <div class="flex items-center lg:order-2">
                        <image
                            id="avatarButton"
                            type="button"
                            data-dropdown-toggle="userDropdown"
                            data-dropdown-placement="bottom-start"
                            class="w-10 h-10 rounded-full cursor-pointer"
                            src={avatar}
                            alt="User dropdown"
                        />

                        <div
                            id="userDropdown"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        >
                            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>Bonnie Green</div>
                                <div class="font-medium truncate">
                                    name@flowbite.com
                                </div>
                            </div>
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="avatarButton"
                            >
                                <li>
                                    <a
                                        href="/"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a
                                    href="/"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
