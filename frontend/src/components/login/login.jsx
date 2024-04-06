import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Username:", username)
        console.log("Password:", password)
        const user = {
            username: username,
            password: password,
        }
        try {
            const response = await axios.post(
                "https://tjf-challenge.azurewebsites.net/web/auth/login",
                user
            )
            if (!response) {
                throw new Error(error)
            }
            let data = response.data
            console.log(data)

            // Salva il token utente nel localStorage o in un cookie per l'autenticazione
            // window.location.href = "../Home/App.jsx"
            navigate("/")

            // Resetta lo stato degli input
            setUsername("")
            setPassword("")
            setError(null)
        } catch (error) {
            console.error("Errore durante la richiesta:", error)
            setError("Credenziali non valide.")
        }
    }
    console.log(window.location.href)
    return (
        <div className="login">
            <img
                src="logo_techsolutions_light.svg"
                alt=""
                className="h-[150px] w-[500px]"
            />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <div className="error">{error}</div>}
                <button
                    type="submit"
                    className="btn btn-primary btn-block btn-large"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
