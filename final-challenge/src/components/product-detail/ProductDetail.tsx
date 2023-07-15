import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import classes from "./ProductDetail.module.css";

import ProductDetailCarousel from "../carousels/product-detail-carousel/ProductDetailCarousel";
import backIcon from "../../assets/chevron-left.svg";
import cartIcon from "../../assets/shopping-cart.svg";

const ProductDetail = () => {
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

  const [product, setProduct] = useState<Product[] | null>([]);
  const params = useParams<{ id: string }>();

  const getData = async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://run.mocky.io/v3/8868b735-ec37-4eb5-8250-37cc1b3c974c"
      );
      const productDetail = response.data.find(
        (product) => product.id === Number(params.id)
      );
      setProduct(productDetail);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  return (
    <>
      <div className={classes.navBar}>
        <Link to={"/"}><img src={backIcon} /></Link>
        <img src={cartIcon} />
      </div>
      <div className={classes.productDetailSection}>
        <p className={classes.productPrice}>{product.price}</p>
        <p className={classes.productName}>{product.name}</p>
      </div>
      <span className={classes.tabBar}>
        <a href="#">Overview</a>
        <a href="#">Features</a>
      </span>
      <ProductDetailCarousel />
      <p>Reviews</p>
    </>
  );
};

export default ProductDetail;
