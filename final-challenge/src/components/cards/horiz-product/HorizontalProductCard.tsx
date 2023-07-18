import { Link } from "react-router-dom";
import productImg from "../../../assets/image1.png";

import classes from "./HorizontalProductCard.module.css";

import arrow from '../../../assets/arrow-right.svg';

interface ProductTitle {
  id: number;
  productTitle: string;
}

const HorizProductCard = (props: ProductTitle) => {
  return (
    <Link to={`/product-detail/${props.id}`}>
      <div className={classes.horizCard}>
        <div className={classes.horizCardText}>
          <h1>{props.productTitle}</h1>
          <Link to={"/product-detail"}>Shop now <img src={arrow} /></Link>
        </div>
        <div className={classes.horizCardImg}>
          <img src={productImg} />
        </div>
      </div>
    </Link>
  );
};

export default HorizProductCard;
