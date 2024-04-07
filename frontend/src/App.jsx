import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import ContactsPage from "./components/contactsPage/ContactsPage"
import UserProfile from "./components/UserProfile/UserProfile"
import Login from "./components/login/login"
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ContactsPage />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
