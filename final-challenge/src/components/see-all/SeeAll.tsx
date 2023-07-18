import { useState, useEffect } from "react";

import axios from "axios";

import classes from "./SeeAll.module.css";
import "react-spring-bottom-sheet-updated/dist/style.css";

import BottomSheetFilter from "../bottomsheet/BottomSheetFilter";

import productImg from "../../assets/image1.png";
import ratingIcon from "../../assets/star-filled.svg";
import moreIcon from "../../assets/more-vertical.svg";
import NavBar from "../navbar/NavBar";

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
    <NavBar />
      <div className={classes.seeAllHeader}>
        <p>Featured products</p>
        <h1>See all products</h1>
        <BottomSheetFilter />
      </div>
      <div className={classes.allProductsSection}>
        {product.map((product) => (
          <div className={classes.productContainer}>
            <span className={classes.productImg}>
              <img src={productImg} />
            </span>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <span className={classes.ratingSection}>
              <p className={classes.ratingNumber}>
                <img src={ratingIcon} /> {product.rating}
              </p>
              <p>{product?.reviews?.length} Reviews</p>
              <span className={classes.moreIcon}>
                <img src={moreIcon} />
              </span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SeeAll;
