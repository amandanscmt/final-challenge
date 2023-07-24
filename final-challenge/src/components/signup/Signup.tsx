import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase-config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

import classes from "./Signup.module.css";
import InputCard from "../cards/input-card/InputCard";
import google from "../../assets/google.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  // Register with email
  const signupEmailHandler = () => {
    if (validateCredentials()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Registered!");
          alert("Register complete!");
          navigate("/signin");
        })
        .catch((error) => {
          console.log("Failed to register", error.message);
          setEmailError("This user already exists.")
        });
    }
  };

  // Register with Google
  const signinGoogleHandler = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        alert("Register complete!");
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
        navigate("/signin");
      } else {
        navigate("/signup");
      }
    });
  }, []);

  return (
    <InputCard>
      <div className={classes.signupInputField}>
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
