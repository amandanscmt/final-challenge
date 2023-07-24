import { Link } from "react-router-dom";

import classes from "./SeeAllCard.module.css";

import productImg from "../../../assets/image1.png";
import ratingIcon from "../../../assets/star-filled.svg";
import moreIcon from "../../../assets/more-vertical.svg";

interface Review {
  user?: string;
  description?: string;
  rating?: number;
  date?: string;
  id?: number;
}

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: Review[];
}

const SeeAllCard = (props: Product) => {
  return (
      <div className={classes.productContainer} key={props.id}>
      <span className={classes.productImg}>
        <img src={productImg} />
      </span>
        <Link to={`/product-detail/${props.id}`}>
      <h2>{props.name}</h2>
    </Link>
      <em><p>{props.price}</p></em>
      <span className={classes.ratingSection}>
        <p className={classes.ratingNumber}>
          <img src={ratingIcon} /> {props.rating}
        </p>
        <p>{props.reviews.length} Reviews</p>
        <span className={classes.moreIcon}>
          <img src={moreIcon} />
        </span>
      </span>
    </div>
  );
};

export default SeeAllCard;
