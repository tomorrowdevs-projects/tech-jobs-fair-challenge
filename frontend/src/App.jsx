import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/login/login"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import { ContactModalProvider } from "./context/contactModalContext"
function App() {
    return (
        <>
            <ContactModalProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<ProfilePage />} />

                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </ContactModalProvider>
        </>
    )
}

export default App
