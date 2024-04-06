import DropdownAvatar from "./../UI/DropdownAvatar"
import logo from "./../../assets/logoTechsolutionsLight.svg"
const Navbar = () => {
    return (
        <header className="antialiased">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                        <a href="/" className="flex mr-4">
                            <img
                                className="mr-3 h-8"
                                alt="TechsolutionsLogo"
                                src={logo}
                            />
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
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
