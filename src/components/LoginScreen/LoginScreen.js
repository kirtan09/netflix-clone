import React, { useRef, useState } from "react";
import Logo from "../../assets/NetflixLogo.png";
import "./LoginScreen.scss";
import SignInScreen from "../SignInScreen/SignInScreen";

function LoginScreen() {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);

  const getStarted = () => {
    setSignUp(true);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        <img className="loginScreen-logo" src={Logo} alt="Netflix Logo" />
        <button
          className="loginScreen-signIn"
          alt="Sign In"
          onClick={() => setSignUp(true)}
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
                <input
                  type="email"
                  placeholder="Email Address"
                  ref={emailRef}
                />
                <button
                  className="loginScreen-getStarted"
                  onClick={() => getStarted()}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        ) : (
          <SignInScreen emailAddress={emailRef.current.value} />
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
