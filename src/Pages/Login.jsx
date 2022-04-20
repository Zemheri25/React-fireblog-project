import React, { useState } from "react";
import "./Login.css";
import blok from "../assets/blok.png";
import {loginUser} from "../helpers/firebase"
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password, navigate)
  }

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <img src={blok} alt="blokimage" className="blokimage" />
        <div className="loginleftandright">
          <div className="leftandright1"></div>
          <h1 style={{ color: "#046582" }}>Login</h1>
          <div className="leftandright1"></div>
        </div>

        <input
          type="text"
          name="email"
          className="logininput"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="logininput"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="loginbutton" />
      </form>
    </div>
  );
};

export default Login;
