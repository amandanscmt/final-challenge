import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase-config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import classes from "./Signin.module.css";
import InputCard from "../cards/input-card/InputCard";
import google from "../../assets/google.svg";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Login
  const signinEmailHandler = () =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in!");
        navigate("/")
      })
      .catch((error) => {
        console.log("Failed to sign in", error.message);
      });

  const signinGoogleHandler = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        navigate("/")
      })
      .catch((error) => {
        console.log("Failed to sign in", error.message); 
      });

  return (
    <InputCard>
      <div className={classes.signinInputField}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={signinEmailHandler}>Sign in</button>
        <button className={classes.googleButton} onClick={signinGoogleHandler}>
          <img className={classes.googleIcon} src={google} />
        </button>
        <p>
          You don't have an account? <Link to={"/signup"}>Sign up!</Link>
        </p>
      </div>
    </InputCard>
  );
};

export default Signin;
