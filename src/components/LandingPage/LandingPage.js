import React, { useRef, useState } from "react";
import Logo from "../../assets/NetflixLogo.png";
import "./LandingPage.scss";
import SignInScreen from "../SignInScreen/SignInScreen";
import landinginfo from "../../informationData/landingInfo.json";

function LandingPage() {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);

  const getStarted = () => {
    setSignUp(true);
  };

  return (
    <div className="landingPage">
      <div className="landingPage-background">
        <img className="landingPage-logo" src={Logo} alt="Netflix Logo" />
        <button
          className="landingPage-signIn"
          alt="Sign In"
          onClick={() => setSignUp(true)}
        >
          Sign In
        </button>
        <div className="landingPage-gradient" />
      </div>
      <div className="landingPage-body">
        {!signUp ? (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="landingPage-input">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  ref={emailRef}
                />
                <button
                  className="landingPage-getStarted"
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
      {landinginfo.map((info) => {
        return (
          <div key={info.id} className="landingPage-info">
            <h3>{info.title}</h3>
            <p>{info.subTitle}</p>
            <img src={info.image} alt={info.alt} />
            <p>{info.alt}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LandingPage;
