import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/authSlice"; // presupun că ai un reducer pentru login

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Folosește useNavigate pentru a redirecționa

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aici logăm utilizatorul, obținând un token
      const response = await axios.post(
        "https://connections-api.goit.global/users/login",
        {
          email,
          password,
        }
      );

      // Salvează tokenul în Redux sau în localStorage pentru autentificare ulterioară
      dispatch(loginUser(response.data.token));

      // Redirecționează utilizatorul către pagina de contacte
      navigate("/contacts");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
