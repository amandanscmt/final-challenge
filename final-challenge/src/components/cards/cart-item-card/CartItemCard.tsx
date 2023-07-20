import classes from "./CartItemCard.module.css";

import productImg from "../../../assets/image1.png";
import minusIcon from "../../../assets/minus.svg";
import plusIcon from "../../../assets/plus.svg";
import trashIcon from "../../../assets/trash-1.svg";

interface CartItem {
  name: string;
  price: string;
  id: number;
  quantity: number;
}

const CartItemCard = (props: CartItem) => {
  return (
    <div>
      <span className={classes.cartItemContainer}>
        <div className={classes.cartItemImg}>
          <img src={productImg} />
        </div>
        <span className={classes.cartItemInfo}>
        <div className={classes.cartItemText}>
          <p>{props.name}</p>
          <em><p>{props.price}</p></em>
        </div>
        <div className={classes.cartItemButtons}>
          <button>
            <img src={minusIcon} />
          </button>
          <p>{props.quantity}</p>
          <button>
            <img src={plusIcon} />
          </button>
          <button className={classes.trashButton}>
            <img src={trashIcon} />
          </button>
        </div>
        </span>
      </span>
    </div>
  );
};

export default CartItemCard;
