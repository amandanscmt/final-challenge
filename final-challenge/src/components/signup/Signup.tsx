import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import classes from './Signup.module.css'

const Signup = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const signupHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      console.log("Signed up!");
    } catch (error) {
      console.log("Failed to sign up", error.message);
    }
  };

  return (
    <div className={classes.signupInputField}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setSignupEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setSignupPassword(e.target.value)}
        required
      />
      <button onClick={signupHandler}>Sign up</button>
      <p>Already have an account? <Link to={"/signin"}>Sign in!</Link></p> 
    </div>
  );
};

export default Signup;
