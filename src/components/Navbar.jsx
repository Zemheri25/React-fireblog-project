import React from "react";
import "./Navbar.css";
import cw from "../assets/cw.jpeg";
import { useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";


const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleNewBlog = () => {
    navigate("/newblog")
  }

  const handleProfile = () => {
    navigate("/profile")
  }

  const handleDashboard = () =>{
    navigate("/")
  }

  return (
    <div className="navbar">
      <img src={cw} alt="cwlogo" className="cwimage" />
      <div className="headingmiddle">
        <div className="leftandright" style={{marginLeft : "5rem"}}></div>
        <h1 style={{ color: "white", cursor : "pointer"  }} onClick = {handleDashboard}>Zemheri25 BLOG</h1>
        <div className="leftandright"></div>
      </div>

      <div className="userrighttop">
        <div style={{ display: "flex" }}>
          {currentUser ? (
            <h4 style={{ color: "white"}}>{currentUser.displayName}</h4>
          ) : (
            <button
              type="button"
              className="btn btn-danger "
              onClick={handleLogin}
              style={{ marginRight: "1rem" }}
            >
              Login
            </button>
          )}
          {currentUser && (
            <DropdownButton
              id="dropdown-basic-button"
              title="Settings"
              variant="danger"
              className="dropdown"
              style={{marginLeft : "1rem"}}
            >
              <Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleNewBlog}>New</Dropdown.Item>
              <Dropdown.Item onClick={() => logOut()}>Log out</Dropdown.Item>
            </DropdownButton>
          )}

          {!currentUser && (
            <button
              type="button"
              className="btn btn-danger "
              onClick={handleRegister}
              style={{ marginLeft: "1rem" }}
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
