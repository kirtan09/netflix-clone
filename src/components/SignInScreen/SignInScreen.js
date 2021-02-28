import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignInScreen.scss";

function SignInScreen(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then()
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then()
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In/ Sign Up</h1>
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          defaultValue={props.emailAddress}
        />
        <input ref={passwordRef} placeholder="Password" type="password" />
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
