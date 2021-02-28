import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ProfileScreen.scss";
import Avatar from "../../assets/NetflixAvatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreenBody">
        <h1>Edit Profile</h1>
        <div className="profileScreenInfo">
          <img src={Avatar} alt="avatar" />
          <div className="profileScreenDetails">
            <h2>{user.email}</h2>
            <div className="profileScreenPlans">
              <h3>Plans</h3>
            </div>
            <button
              className="profileScreenSignOut"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
