import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/NetflixLogo.png";
import Avatar from "../../assets/NetflixAvatar.png";

function Navbar() {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${handleShow && "navbar-black"}`}>
      <img className="navbar-logo" src={Logo} alt="Netflix Logo" />
      <img className="navbar-avatar" src={Avatar} alt="Avatar" />
    </div>
  );
}

export default Navbar;
