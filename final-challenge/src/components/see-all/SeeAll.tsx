import { useState, useEffect } from "react";
import axios from "axios";

import classes from "./SeeAll.module.css";
import cartIcon from "../../assets/shopping-cart.svg";
import "react-spring-bottom-sheet-updated/dist/style.css";

import BottomSheetFilter from "../bottomsheet/BottomSheetFilter";

import NavBar from "../navbar/NavBar";
import SeeAllCard from "../cards/see-all-card/SeeAllCard";

const SeeAll = () => {
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
      <NavBar icon={cartIcon} link={"/cart"} />
      <div className={classes.seeAllHeader}>
        <p>Featured products</p>
        <h1>See all products</h1>
        <BottomSheetFilter />
      </div>
      <div className={classes.allProductsSection}>
        {product.map((product) => (
          <SeeAllCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </>
  );
};

export default SeeAll;
