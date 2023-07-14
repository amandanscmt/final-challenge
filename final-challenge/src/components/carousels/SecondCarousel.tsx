import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { useState, useEffect } from "react";

import ProductCard from "../cards/product-card/ProductCard";

const SecondCarousel = () => {
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
      console.error(error);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  return (
    <Splide
      options={{ perPage: 2, rewind: true }}
      aria-label="Featured Products"
    >
      <SplideSlide>
        <ProductCard
          key={products[0]?.id}
          productTitle={products[0]?.name}
          productPrice={products[0]?.price}
        />
      </SplideSlide>
      <SplideSlide>
        <ProductCard
          productTitle={products[1]?.name}
          productPrice={products[1]?.price}
        />
      </SplideSlide>
      <SplideSlide>
        <ProductCard
          productTitle={products[2]?.name}
          productPrice={products[2]?.price}
        />
      </SplideSlide>
      <SplideSlide>
        <ProductCard
          productTitle={products[3]?.name}
          productPrice={products[3]?.price}
        />
      </SplideSlide>
    </Splide>
  );
};

export default SecondCarousel;