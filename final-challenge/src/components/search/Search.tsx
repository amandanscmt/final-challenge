import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import classes from "./Search.module.css";

import NavBar from "../navbar/NavBar";
import productImg from "../../assets/image1.png";
import ratingIcon from "../../assets/star-filled.svg";
import moreIcon from "../../assets/more-vertical.svg";
import cartIcon from "../../assets/shopping-cart.svg";

const Search = () => {
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
  const [search, setSearch] = useState("");
  const searchInput = product.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

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
      <NavBar icon={cartIcon} link={"/cart"} title="Search" />
      <div className={classes.searchBar}>
        <input
          type="text"
          className={classes.searchProducts}
          placeholder="Search headphone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <p className={classes.title}>Popular products</p>
      <span className={classes.productSection}>
        {searchInput.map((product) => (
          <div className={classes.productCard} key={product.id}>
            <img className={classes.productImg} src={productImg} />
            <span className={classes.productText}>
              <Link to={`/product-detail/${product.id}`}>
                <p className={classes.productName}>{product.name}</p>
              </Link>
              <em>
                <p>{product.price}</p>
              </em>
              <span className={classes.ratingSection}>
                <div className={classes.ratingText}>
                  <p>
                    <img src={ratingIcon} />
                    {product.rating}
                  </p>
                  <p>{product?.reviews?.length} Reviews</p>
                </div>
                <div className={classes.moreIcon}>
                  <img src={moreIcon} />
                </div>
              </span>
            </span>
          </div>
        ))}
      </span>
    </>
  );
};

export default Search;
