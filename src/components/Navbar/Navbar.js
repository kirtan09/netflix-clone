import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/NetflixLogo.png";
import Avatar from "../../assets/NetflixAvatar.png";
import { useHistory } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function Navbar(props) {
  const [handleShow, setHandleShow] = useState(false);
  const user = useSelector(selectUser);
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
        style={user ? { width: "80px" } : { width: "150px" }}
        src={Logo}
        alt="Netflix Logo"
        onClick={openHome}
      />
      {user ? (
        <img
          className="navbar-avatar"
          src={Avatar}
          alt="Avatar"
          onClick={openProfile}
        />
      ) : (
        <button
          onClick={props.btnOnClick}
          alt="Sign in"
          className="navbar-signInBtn"
        >
          Sign in
        </button>
      )}
    </div>
  );
}

export default Navbar;
