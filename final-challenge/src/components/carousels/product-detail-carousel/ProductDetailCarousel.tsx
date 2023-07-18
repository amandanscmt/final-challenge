import { Splide, SplideSlide } from "@splidejs/react-splide";

import classes from "./ProductDetailCarousel.module.css";

import detailImage from "../../../assets/image3.png";
import detailImage2 from "../../../assets/image4.png";

const ProductDetailCarousel = () => {
  return (
    <div className={classes.detailCarouselContainer}>
      <Splide
        options={{
          arrows: false,
          pagination: false,
          gap: "1rem",
          padding: "1rem",
        }}
        aria-label="Product Detail"
      >
        <SplideSlide>
          <img src={detailImage} className={classes.detailImage} />
        </SplideSlide>
        <SplideSlide>
          <img src={detailImage2} className={classes.detailImage} />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ProductDetailCarousel;
