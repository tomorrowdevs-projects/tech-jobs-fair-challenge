import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import Login from "./components/login/login"
import { LoadingProvider } from "./context/LoadingContext"
function App() {
    return (
        <>
            <LoadingProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<ProfilePage />} />

                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </LoadingProvider>
        </>
    )
}

export default App
