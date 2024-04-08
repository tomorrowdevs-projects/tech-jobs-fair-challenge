import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./login.module.css"

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    //memorize the login credentials into the input fields
    const admin = {
        username: "admin",
        password: "TJF-Challenge_04-2024",
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("Username:", username)
        // console.log("Password:", password)
        // const user = {
        //     username: username,
        //     password: password,
        // }
        try {
            const response = await axios.post(
                "https://tjf-challenge.azurewebsites.net/web/auth/login",
                admin
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
        <div className={styles.bodyLogin}>
            <div className={styles.login}>
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
                        className={styles.input}
                        value={admin.username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={styles.input}
                        value={admin.password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <div className="error">{error}</div>}
                    <button
                        type="submit"
                        className={[
                            styles.btn,
                            styles["btn-primary"],
                            styles["btn-block"],
                            styles["btn-large"],
                        ].join(" ")}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
