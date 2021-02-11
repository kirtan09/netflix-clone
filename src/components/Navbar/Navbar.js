import React from "react";
import "./Navbar.css";
import Logo from "../../assets/NetflixLogo.png";
import Avatar from "../../assets/NetflixAvatar.png";

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={Logo} alt="Netflix Logo" />
      <img className="nav-avatar" src={Avatar} alt="Avatar" />
    </div>
  );
}

export default Navbar;
