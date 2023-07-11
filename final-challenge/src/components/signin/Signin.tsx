import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

import classes from './Signin.module.css'

const Signin = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const signinHandler = async () => {
    try {
      await signInWithEmailAndPassword(auth, signinEmail, signinPassword);
      console.log("Signed in!");
    } catch (error) {
      console.log("Failed to sign in", error.message);
    }
  };

  return (
    <div className={classes.signinInputField}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setSigninEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setSigninPassword(e.target.value)}
        required
      />
      <a href="">Forgot password</a>
      <button onClick={signinHandler}>Sign in</button>
      <p>
        You don't have an account? <Link to={"/signup"}>Sign up!</Link>
      </p>
    </div>
  );
};

export default Signin;