import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Home.module.css";
import "@splidejs/react-splide/css";
import "../../index.css";

import logo from "../../assets/logo.svg";
import menu from "../../assets/menu-variant.svg";
import icon from "../../assets/userpic.png";

import FirstCarousel from "../carousels/FirstCarousel";
import SecondCarousel from "../carousels/SecondCarousel";

const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        navigate("/signin");
      }
    });
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error.message)
      // An error happened.
    });
  }

  return (
    <>
      <div className={classes.navBar}>
        <div className={classes.dropdown}>
          <span>
            <button className={classes.menu}>
              <img src={menu} />
            </button>
          </span>
          <div className={classes.dropdownContent}>
            <button onClick={logout}>Log out</button>
          </div>
        </div>
        <span className={classes.logoContainer}>
          <img className={classes.logo} src={logo} /> <p>Audio</p>
        </span>
        <img className={classes.icon} src={icon} />
      </div>
      <div className={classes.homeTitle}>
        <h2>Hi, {auth.name}.</h2>
        <h1>What are you looking for today?</h1>
      </div>
      <Link to={"/search"}>
        <div className={classes.searchBar}>
          <input
            type="text"
            className={classes.searchProducts}
            placeholder="Search headphone"
          />
        </div>
      </Link>
      <section className={classes.productSection}>
        <FirstCarousel />
        <div className={classes.featuredBar}>
          <p>Featured products</p>
          <Link to={"/see-all"}>See all</Link>
        </div>
        <SecondCarousel />
      </section>
    </>
  );
};

export default Home;
