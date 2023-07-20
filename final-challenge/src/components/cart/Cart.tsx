import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";

import NavBar from "../navbar/NavBar";
import CartItemCard from "../cards/cart-item-card/CartItemCard";
import trashIcon from "../../assets/trash-2.svg";

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

  const { getItemQt, increaseCartQt } = useCart();
  const quantity = getItemQt(product.id);
  console.log(quantity);

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

  return (
    <>
      <NavBar icon={trashIcon} title="Shopping Cart" />
      {product.map((product) => (
        <CartItemCard
          name={product.name}
          price={product.price}
          id={product.id}
          quantity={quantity}
        />
      ))}
    </>
  );
};

export default Cart;
