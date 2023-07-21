import classes from "./CartItemCard.module.css";

import productImg from "../../../assets/image1.png";
import minusIcon from "../../../assets/minus.svg";
import plusIcon from "../../../assets/plus.svg";
import trashIcon from "../../../assets/trash-1.svg";
import { useCart } from "../../context/CartContext";

interface CartItemProps {
  name: string;
  price: string;
  id: number;
  quantity: number;
}

const CartItemCard = (props: CartItemProps) => {
  const { removeFromCart, increaseCartQt, decreaseCartQt } = useCart();

  return (
    <div>
      <span className={classes.cartItemContainer}>
        <div className={classes.cartItemImg}>
          <img src={productImg} />
        </div>
        <span className={classes.cartItemInfo}>
          <div className={classes.cartItemText}>
            <p>{props.name}</p>
            <em>
              <p>{props.price}</p>
            </em>
          </div>
          <div className={classes.cartItemButtons}>
            <button onClick={() => decreaseCartQt(props.id)}>
              <img src={minusIcon} />
            </button>
            <p>{props.quantity}</p>
            <button onClick={() => increaseCartQt(props.id)}>
              <img src={plusIcon} />
            </button>
            <button
              onClick={() => removeFromCart(props.id)}
              className={classes.trashButton}
            >
              <img src={trashIcon} />
            </button>
          </div>
        </span>
      </span>
    </div>
  );
};

export default CartItemCard;
