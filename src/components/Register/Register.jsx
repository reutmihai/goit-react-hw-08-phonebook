import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importă useNavigate

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Crează funcția de navigare

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://connections-api.goit.global/users/signup",
        {
          name,
          email,
          password,
        }
      );
      console.log(response.data);

      alert("User registered successfully!");
      navigate("/login"); // După înregistrare, redirecționează la login
    } catch (error) {
      console.error(error.response);
      setError(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
