import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";

import HorizProductCard from "../cards/horiz-product/HorizontalProductCard";

import classes from "./FirstCarousel.module.css";

const FirstCarousel = () => {
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
  const [category, setCategory] = useState("Headphones");
  const filteredCategory = product.filter(
    (product) => product.category === category
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
      <div className={classes.filterCarouselContainer}>
        <Splide
          options={{
            perPage: 3,
            rewind: true,
            gap: "1rem",
            arrows: false,
            pagination: false,
          }}
        >
          <SplideSlide>
            <label className={classes.checkboxFilter}>
              Headphones
              <input
                type="radio"
                value="Headphones"
                id="headphones"
                name="categoryfilter"
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </SplideSlide>
          <SplideSlide>
            <label className={classes.checkboxFilter}>
              Headsets
              <input
                type="radio"
                value="Headsets"
                id="headset"
                name="categoryfilter"
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </SplideSlide>
          <SplideSlide>
            <label className={classes.checkboxFilter}>
              Earpads
              <input
                type="radio"
                value="Earpads"
                id="earpads"
                name="categoryfilter"
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </SplideSlide>
          <SplideSlide>
            <label className={classes.checkboxFilter}>
              Headbands
              <input
                type="radio"
                value="Headbands"
                id="headbands"
                name="categoryfilter"
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </SplideSlide>
        </Splide>
      </div>

      <Splide
        options={{ arrows: false, pagination: false, gap: "1rem" }}
        type="loop"
        aria-label="Products"
      >
        {category !== "Headphones" && category !== "Headsets" ? (
          <span className={classes.notAvaliable}>
            <h1>Sorry!</h1>{" "}
            <p>This category has no products avaliable at the moment.</p>
          </span>
        ) : (
          filteredCategory.map((product) => (
            <SplideSlide key={product.id}>
              <HorizProductCard
                key={product.id}
                id={product.id}
                productTitle={product.name}
              />
            </SplideSlide>
          ))
        )}
      </Splide>
    </>
  );
};

export default FirstCarousel;
