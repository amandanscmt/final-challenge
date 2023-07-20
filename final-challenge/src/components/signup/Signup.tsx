import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase-config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import classes from "./Signup.module.css";
import InputCard from "../cards/input-card/InputCard";
import google from "../../assets/google.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register
  const signupEmailHandler = () =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered!");
        alert("Register complete!")
        navigate("/signin");
      })
      .catch((error) => {
        console.log("Failed to register", error.message);
      });

  const signinGoogleHandler = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        alert("Register complete!")
        navigate("/");
      })
      .catch((error) => {
        console.log("Failed to sign in", error.message);
      });

  return (
    <InputCard>
      <div className={classes.signupInputField}>
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
        <button onClick={signupEmailHandler}>Sign up</button>
        <button className={classes.googleButton} onClick={signinGoogleHandler}>
          <img className={classes.googleIcon} src={google} />
        </button>
        <p>
          Already have an account? <Link to={"/signin"}>Sign in!</Link>
        </p>
      </div>
    </InputCard>
  );
};

export default Signup;
