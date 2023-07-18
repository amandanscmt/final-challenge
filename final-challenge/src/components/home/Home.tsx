import { auth } from "../../config/firebase-config";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import "@splidejs/react-splide/css";
import "../../index.css";

import logo from "../../assets/logo.svg";

import FirstCarousel from "../carousels/FirstCarousel";
import SecondCarousel from "../carousels/SecondCarousel";

const Home: React.FC = () => {
  return (
    <>
      <div className={classes.navBar}>
        <img className={classes.logo} src={logo} /> <p>Audio</p>
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
