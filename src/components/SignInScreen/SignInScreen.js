import React from "react";
import "./signInScreen.css";

function SignInScreen() {
  const signUp = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign Up</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen-gray">New to Netflix? </span>
          <span className="signInScreen-link" onClick={signUp}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
