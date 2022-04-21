import React from "react";
import "./Login.css";
import blok from "../assets/blok.png";
import { useState } from "react";
import {createUser} from "../helpers/firebase"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    const first = email.indexOf("@");
    const displayName = email.slice(0, first)
    e.preventDefault();
    createUser(email, password, displayName, navigate);
    
  }
 

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <img src={blok} alt="blokimage" className="blokimage" />
        <div className="loginleftandright">
          <div className="leftandright1"></div>
          <h1 style={{ color: "#046582" }}>Register</h1>
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
        <input type="submit" className="loginbutton" value="Register" />
        <Link style={{textAlign : "center"}} to={"/login"}>Do you have an account?</Link>
      </form>
      
    </div>
  );
};

export default Register;
