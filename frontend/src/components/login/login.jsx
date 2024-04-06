import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Stato per gestire il login avvenuto

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

      let data = response.data;
      console.log(data);

      // Setta lo stato per indicare che il login è avvenuto con successo
      setLoggedIn(true);

      // Resetta lo stato degli input e degli errori
      setUsername("");
      setPassword("");
      setError(null);
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
      setError("Credenziali non valide.");
    }
  };

  // Se l'utente è loggato con successo, reindirizza alla homepage
  if (loggedIn) {
    return <Navigate to="./components/Home/App.jsx" replace />;
  }

  return (
    <div className="login">
      <img src="logo_techsolutions_light.svg" alt="" className="h-[150px] w-[500px]" />
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
