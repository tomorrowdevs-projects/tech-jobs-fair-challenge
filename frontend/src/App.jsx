import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import ContactsPage from "./components/ContactsPage/ContactsPage"
import UserProfile from "./components/UserProfile/UserProfile"

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
