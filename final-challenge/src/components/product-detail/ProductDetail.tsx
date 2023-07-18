import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import classes from "./ProductDetail.module.css";

import ProductDetailCarousel from "../carousels/product-detail-carousel/ProductDetailCarousel";
import ReviewsCard from "../cards/reviews-card/ReviewsCard";
import SecondCarousel from "../carousels/SecondCarousel";
import NavBar from "../navbar/NavBar";

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

  const [active, setActive] = useState("overview");

  const activeTabHandler = (tab: string) => {
    setActive(tab);
  };

  return (
    <div className={classes.productDetailPage}>
      <NavBar />
      <div className={classes.productDetailSection}>
        <p className={classes.productPrice}>{product?.price}</p>
        <p className={classes.productName}>{product?.name}</p>
      </div>
      <span className={classes.tabBar}>
        <a
          href="#"
          onClick={() => activeTabHandler("overview")}
          className={active === "overview" ? "active" : ""}
        >
          Overview
        </a>
        <a
          href="#"
          onClick={() => activeTabHandler("features")}
          className={active === "features" ? "active" : ""}
        >
          Features
        </a>
      </span>
      {active === "overview" && (
        <>
          <ProductDetailCarousel />
          <div className={classes.reviewSection}>
            <p>Reviews ({product?.reviews?.length})</p>
            {product?.reviews?.map((review: Review) => (
              <div>
                <ReviewsCard
                  key={review.id}
                  user={review.user}
                  description={review.description}
                  rating={review.rating}
                />
              </div>
            ))}
            <section className={classes.moreProducts}>
              <div className={classes.moreProductsBar}>
                <p>Another products</p>
                <Link to={"/see-all"}>See all</Link>
              </div>
              <div className={classes.moreProductsCarousel}>
                <SecondCarousel />
              </div>
            </section>
          </div>
        </>
      )}

      {active === "features" && (
        <div className={classes.featuresTab}>
          <h1>Highly Detailed Audio</h1>
          <p>
            The speaker unit contains a diaphragm that is precision-grown from
            NAC Audio bio-cellulose, making it stiffer, lighter and stronger
            than regular PET speaker units, and allowing the sound-producing
            diaphragm to vibrate without the levels of distortion found in other
            speakers.
          </p>
          <p>
            The speaker unit contains a diaphragm that is precision-grown from
            NAC Audio bio-cellulose, making it stiffer, lighter and stronger
            than regular PET speaker units, and allowing the sound-producing
            diaphragm to vibrate without the levels of distortion found in other
            speakers.
          </p>
        </div>
      )}

      <span className={classes.cartButtonSection}>
        <button className={classes.cartButton}>Add to cart</button>
      </span>
    </div>
  );
};

export default ProductDetail;
