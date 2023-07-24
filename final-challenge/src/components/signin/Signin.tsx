import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase-config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import classes from "./Signin.module.css";
import InputCard from "../cards/input-card/InputCard";
import google from "../../assets/google.svg";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateCredentials = () => {
    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!email.includes("@")) {
      setEmailError("Please enter a valid email.");
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    }
    return valid;
  };

  // Login
  const signinEmailHandler = () =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        console.log("Failed to sign in", error.message);
        setEmailError("Invalid credentials. Check if your email and password are correct or sign up.")
      });

  // Login with Google
  const signinGoogleHandler = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        console.log("Failed to sign in", error.message);
      });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
        navigate("/");
      } else {
        navigate("/signin");
      }
    });
  }, []);

  return (
    <>
      <InputCard>
        <div className={classes.signinInputField}>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {setEmail(e.target.value); validateCredentials()}}
              required
              className={emailError ? classes.emailInputError : ""}
            />
            {emailError && <p className={classes.emailError}>{emailError}</p>}
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {setPassword(e.target.value); validateCredentials()}}
              required
              className={passwordError ? classes.passwordInputError : ""}
            />
            {passwordError && <p className={classes.passwordError}>{passwordError}</p>}
          </form>
          <button onClick={signinEmailHandler}>Sign in</button>
          <button
            className={classes.googleButton}
            onClick={signinGoogleHandler}
          >
            <img className={classes.googleIcon} src={google} />
          </button>
          <p>
            You don't have an account? <Link to={"/signup"}>Sign up!</Link>
          </p>
        </div>
      </InputCard>
    </>
  );
};

export default Signin;
