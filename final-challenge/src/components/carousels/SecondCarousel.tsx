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

  const [product, setProduct] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://run.mocky.io/v3/8868b735-ec37-4eb5-8250-37cc1b3c974c"
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  return (
    <Splide
      options={{ perPage: 2, rewind: true, arrows: false, pagination: false }}
      aria-label="Featured Products"
    >
      <SplideSlide>
        <ProductCard
          key={product[0]?.id}
          productTitle={product[0]?.name}
          productPrice={product[0]?.price}
        />
      </SplideSlide>
      <SplideSlide>
        <ProductCard
          productTitle={product[1]?.name}
          productPrice={product[1]?.price}
        />
      </SplideSlide>
      <SplideSlide>
        <ProductCard
          productTitle={product[2]?.name}
          productPrice={product[2]?.price}
        />
      </SplideSlide>
      <SplideSlide>
        <ProductCard
          productTitle={product[3]?.name}
          productPrice={product[3]?.price}
        />
      </SplideSlide>
    </Splide>
  );
};

export default SecondCarousel;
