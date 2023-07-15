import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";

import classes from "./FilterCarousel.module.css";

const FilterCarousel = () => {
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

  const [products, setProducts] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://run.mocky.io/v3/8868b735-ec37-4eb5-8250-37cc1b3c974c"
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  const filterHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    products.map()
  };

  return (
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
          <button
            onClick={filterHandler}
            className={classes.filterCarouselButton}
          >
            Headphone
          </button>
        </SplideSlide>
        <SplideSlide>
          <button className={classes.filterCarouselButton}>Headsets</button>
        </SplideSlide>
        <SplideSlide>
          <button className={classes.filterCarouselButton}>Earpads</button>
        </SplideSlide>
        <SplideSlide>
          <button className={classes.filterCarouselButton}>Headband</button>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default FilterCarousel;
