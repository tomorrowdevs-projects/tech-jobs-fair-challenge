import React, { useState } from "react";
import "./login.css";
import axios from "axios"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    const user = {
      username: username,
      password: password
    };
    try {
      const response = await axios.post(`/web/auth/login`, user);
  
      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      } 
  
      const data = await response.json();
      console.log("Risultato della ricerca:", data);
  
      // setResult(data); // Se setResult è una funzione di stato, puoi impostare i dati di risposta come stato qui
    } catch (errore) {
      console.error("Errore durante la ricerca:", errore.message);
    }
  };
  
  return (
    <div className="login">
      <h1>Login</h1>
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
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in
        </button>
      </form>
    </div>
  );
};

export default Login;
