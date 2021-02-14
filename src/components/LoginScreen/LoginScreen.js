import React, { useState } from "react";
import Logo from "../../assets/NetflixLogo.png";
import "./LoginScreen.css";
import SignInScreen from "../SignInScreen/SignInScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        <img className="loginScreen-logo" src={Logo} alt="Netflix Logo" />
        <button
          className="loginScreen-signIn"
          alt="Sign In"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div className="loginScreen-gradient" />
      </div>
      <div className="loginScreen-body">
        {!signUp ? (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen-getStarted"
                  onClick={() => setSignUp(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        ) : (
          <SignInScreen />
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
