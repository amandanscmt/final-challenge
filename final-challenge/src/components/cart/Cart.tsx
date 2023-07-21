import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

import CartItemCard from "../cards/cart-item-card/CartItemCard";
import trashIcon from "../../assets/trash-2.svg";
import arrowIcon from "../../assets/chevron-right.svg";
import backIcon from "../../assets/chevron-left.svg";

import classes from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  interface Review {
    user: string;
    description: string;
    rating: number;
    date: string;
    id: number;
  }

  interface Product {
    id: number;
    rating: number;
    price: string;
    name: string;
    description: string;
    category: string;
    created_at: string;
    reviews: Review[];
  }

  const [product, setProduct] = useState<Product[]>([]);

  const { getItemQt, cartQuantity, cleanCart } = useCart();

  const getData = async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://run.mocky.io/v3/8868b735-ec37-4eb5-8250-37cc1b3c974c"
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  const cartProducts = product.filter((product) => getItemQt(product.id) > 0);

  const convertPrice = (price: string): number => {
    return parseFloat(price.replace("$", "").replace(",", ""));
  };

  const totalPrice = (): number => {
    let total = 0;
    for (const product of cartProducts) {
      const price = convertPrice(product.price);
      const quantity = getItemQt(product.id);
      total += price * quantity;
    }
    return total;
  };

  return (
    <>
      <div className={classes.navBar}>
        <Link to={"/see-all"}>
          <img src={backIcon} />
        </Link>
        <h1>Shopping Cart</h1>
        <button onClick={cleanCart} className={classes.cleanCartButton}>
          <img src={trashIcon} />
        </button>
      </div>
      {cartProducts.map((product) => (
        <CartItemCard
          key={product.id}
          name={product.name}
          price={product.price}
          id={product.id}
          quantity={getItemQt(product.id)}
        />
      ))}
      <section className={classes.cartFooter}>
        <div className={classes.cartFooterText}>
          <p>Total {cartQuantity} items</p>
          <em>
            <p>R$ {totalPrice()}</p>
          </em>
        </div>
        <button className={classes.checkoutButton}>
          Proceed to Checkout <img src={arrowIcon} />
        </button>
      </section>
    </>
  );
};

export default Cart;
