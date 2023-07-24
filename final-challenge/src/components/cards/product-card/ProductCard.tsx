import classes from "./ProductCard.module.css";

import productImg1 from "../../../assets/image1.png";

interface ProductCard {
  productTitle: string;
  productPrice: string;
}

const ProductCard = (props: ProductCard) => {
  return (
    <div className={classes.productCard}>
    <div className={classes.productImg}>
      <img src={productImg1} />
      </div>
    <div className={classes.productCardText}>
      <p className={classes.productTitle}>{props.productTitle}</p>
      <em><p className={classes.productPrice}>{props.productPrice}</p></em>
    </div>
    </div>
  );
};

export default ProductCard;
