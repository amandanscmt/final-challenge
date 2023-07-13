import { auth } from "../../config/firebase-config";
import { useEffect, useState } from "react";

import classes from "./Home.module.css";
import "../../index.css";
import logo from "../../assets/logo.svg";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import HorizProductCard from "../cards/horiz-product/HorizontalProductCard";
import { Link } from "react-router-dom";
import ProductCard from "../cards/product-card/ProductCard";

const Home: React.FC = () => {
  interface ProductData {
    rating: number;
    price: string;
    name: string;
    description: string;
    category: string;
    reviews: string | number[];
  }

  const [data, setData] = useState<ProductData[]>([]);

  const getData = async () =>
    await axios
      .get<ProductData[]>(
        "https://run.mocky.io/v3/8868b735-ec37-4eb5-8250-37cc1b3c974c"
      )
      .then((response) => console.log(response))
      .then((response) => setData(response));

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={classes.navBar}>
        <img className={classes.logo} src={logo} /> <p>Audio</p>
      </div>
      <div className={classes.homeTitle}>
        <h2>Hi, {auth.name}.</h2>
        <h1>What are you looking for today?</h1>
      </div>
      <div className={classes.searchBar}>
        <input
          type="text"
          className={classes.searchProducts}
          placeholder="Search headphone"
        />
      </div>
      <section className={classes.productSection}>
        <div className={classes.homeFirstCarousel}>
          <HorizProductCard productTitle="TMA-2 Modular Headphone" />
        </div>
        <div className={classes.featuredBar}>
          <p>Featured products</p>
          <Link to={"/see-all"}>See all</Link>
        </div>
        <div className={classes.featuredProductsCarousel}>
          <Splide
            options={{ perPage: 2, rewind: true }}
            aria-label="Featured Products"
          >
            <SplideSlide>
              <ProductCard
                productTitle="TMA-2 HD Wireless"
                productPrice="USD 400"
              />
            </SplideSlide>
            <SplideSlide>
              <ProductCard
                productTitle="TMA-2 HD Wireless"
                productPrice="USD 600"
              />
            </SplideSlide>
            <SplideSlide>
              <ProductCard
                productTitle="TMA-2 HD Wireless"
                productPrice="USD 750"
              />
            </SplideSlide>
            <SplideSlide>
              <ProductCard
                productTitle="TMA-2 HD Wireless"
                productPrice="USD 350"
              />
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
};

export default Home;
