import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import avatar from "../../assets/94.jpg"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white hover:rounded-full  hover:bg-gray-500 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <img
                        id="avatarButton"
                        type="button"
                        data-dropdown-toggle="userDropdown"
                        data-dropdown-placement="bottom-start"
                        className="w-10 h-10 rounded-full cursor-pointer"
                        src={avatar}
                        alt="User dropdown"
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 bg-gray-700  origin-top-right  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/"
                                    className={classNames(
                                        active
                                            ? "bg-gray-600 text-white"
                                            : "text-white",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/"
                                    className={classNames(
                                        active
                                            ? "bg-gray-600 text-white"
                                            : "text-white",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Logout
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
