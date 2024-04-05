import React, { useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    const user = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://tjf-challenge.azurewebsites.net/web/auth/login",
        user
      );

      const data = response.data;
      console.log("Response data:", data);

      // Salva il token utente nel localStorage o in un cookie per l'autenticazione

      // Resetta lo stato degli input
      setUsername("");
      setPassword("");
      setError(null);
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
      setError("Credenziali non valide.");
    }
  };

  return (
    <div className="login">
      
      <img src="../public/favicon.ico" alt="" className="h-[150px] w-[300px]" />
    
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
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
