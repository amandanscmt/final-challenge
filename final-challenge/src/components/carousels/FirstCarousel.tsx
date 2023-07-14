import { Splide, SplideSlide } from "@splidejs/react-splide";
import HorizProductCard from "../cards/horiz-product/HorizontalProductCard";
import axios from "axios";
import { useState, useEffect } from "react";

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
    <Splide type="loop" aria-label="Products">
      <SplideSlide>
        <HorizProductCard
          id={products[0]?.id}
          productTitle={products[0]?.name}
        />
      </SplideSlide>
      <SplideSlide>
        <HorizProductCard
          id={products[1]?.id}
          productTitle={products[1]?.name}
        />
      </SplideSlide>
      <SplideSlide>
        <HorizProductCard
          id={products[2]?.id}
          productTitle={products[2]?.name}
        />
      </SplideSlide>
    </Splide>
  );
};

export default FirstCarousel;
