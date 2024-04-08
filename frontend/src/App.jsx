import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/login/login"
import ProfilePage from "./components/ProfilePage/ProfilePage"
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<ProfilePage />} />

                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
