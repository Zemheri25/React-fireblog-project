import React from "react";
import "./Navbar.css";
import cw from "../assets/cw.jpeg";
import { useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="navbar">
      <img src={cw} alt="cwlogo" className="cwimage" />
      <div className="headingmiddle">
        <div className="leftandright"></div>
        <h1 style={{ color: "white" }}>Zemheri25 BLOG</h1>
        <div className="leftandright"></div>
      </div>

      <div className="userrighttop">
        <div style={{ display: "flex" }}>
          {currentUser ? (
            <h4 style={{ color: "white", marginRight: "1rem" }}>
              {currentUser.displayName}
            </h4>
          ) : (
            <button
              type="button"
              className="btn btn-danger "
              onClick={handleLogin}
              style = {{marginRight : "1rem"}}
            >
              Login
            </button>
          )}
          {currentUser ? (
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => logOut()}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger "
              onClick={handleRegister}
            >
              Register
            </button>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
