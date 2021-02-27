import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/NetflixLogo.png";
import Avatar from "../../assets/NetflixAvatar.png";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [handleShow, setHandleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);
    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  const navbarTransition = () => {
    if (window.scrollY > 150) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  const openHome = () => {
    history.push("/");
  };

  const openProfile = () => {
    history.push("/profile");
  };

  return (
    <div className={`navbar ${handleShow && "navbar-black"}`}>
      <img
        className="navbar-logo"
        src={Logo}
        alt="Netflix Logo"
        onClick={openHome}
      />
      <img
        className="navbar-avatar"
        src={Avatar}
        alt="Avatar"
        onClick={openProfile}
      />
    </div>
  );
}

export default Navbar;
