import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import ContactsPage from "../contactsPage/ContactsPage"
import UserProfile from "../UserProfile/UserProfile"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ContactsPage />} />
                    <Route path="/profile" element={<UserProfile />} />
                    {/* <Route path="/loginPage" element={<LoginPage />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App