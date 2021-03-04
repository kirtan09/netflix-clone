import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ProfileScreen.scss";
import Avatar from "../../assets/NetflixAvatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import PlansScreen from "../PlansScreen/PlansScreen";
import { getSubscription } from "../../features/subscriptionSlice";
import { useHistory } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const subscription = useSelector(getSubscription);
  const history = useHistory();

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreenBody">
        <h1>{subscription.role ? "Edit profile" : "Select a plan"}</h1>
        <div className="profileScreenInfo">
          <img src={Avatar} alt="avatar" />
          <div className="profileScreenDetails">
            <h2>{user.email}</h2>
            <div className="profileScreenPlans">
              <h3>
                Plans{" "}
                {subscription.role &&
                  `(Current Plan: ${capitalize(subscription.role)})`}
              </h3>
              <PlansScreen />
            </div>
            <div className="profileScreenButtons">
              <button
                className="profileScreenSignOut"
                onClick={() => auth.signOut()}
                style={!subscription.role ? { width: "100%" } : null}
              >
                Sign Out
              </button>
              {subscription.role ? (
                <button
                  className="profileScreenHomeBtn"
                  onClick={() => history.push("/")}
                >
                  Home
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
