import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";

import backIcon from "../../assets/chevron-left.svg";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { useEffect, useState } from "react";

interface NavBar {
  title?: string;
  icon: string;
  link?: string;
}

const NavBar = (props: NavBar) => {
  const { cartQuantity } = useCart();

  return (
    <div className={classes.navBar}>
      <Link to={"/"}>
        <img src={backIcon} />
      </Link>
      <h1>{props.title}</h1>
      <Link to={props.link}>
        <span className={classes.cartSection}>
        <p className={classes.cartQuantity}>{cartQuantity}</p>
        <img src={props.icon} />
        </span>
      </Link>
    </div>
  );
};

export default NavBar;
