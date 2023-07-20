import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";

import backIcon from "../../assets/chevron-left.svg";

interface NavBar {
  title?: string;
  icon: string
  link?: string
}

const NavBar = (props: NavBar) => {

  return (
    <div className={classes.navBar}>
      <Link to={"/"}>
        <img src={backIcon} />
      </Link>
      <h1>{props.title}</h1>
      <Link to={props.link}><img src={props.icon} /></Link>
    </div>
  );
};

export default NavBar;
