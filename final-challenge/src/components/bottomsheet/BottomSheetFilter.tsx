import axios from "axios";
import { useState, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet-updated";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import filterIcon from "../../assets/filtericon.svg";

import classes from "./BottomSheet.module.css";

const BottomSheetFilter = () => {
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
  const [category, setCategory] = useState("");
  const [sortby, setSortby] = useState('')

  const [open, setOpen] = useState(false);

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

  const filterHandler = () => {
    const filteredCategory = product.filter(
      (product) => product.category === category
    );
    console.log(filteredCategory);

    const sortbyPop: Product[] = product.sort((item1, item2) => {
      if (item1.reviews > item2.reviews) {
        return 1;
      }
      if (item1.reviews < item2.reviews) {
        return -1;
      }
      return 0;
    });
    console.log(sortbyPop);

    const sortbyReview: Product[] = product.sort((item1, item2) => {
      if (item1.rating > item2.rating) {
        return 1;
      }
      if (item1.rating < item2.rating) {
        return -1;
      }
      return 0;
    });
    console.log(sortbyReview);

    const sortbyOldest: Product[] = product.sort((item1, item2) => {
      if (item1.created_at > item2.created_at) {
        return 1;
      }
      if (item1.created_at < item2.created_at) {
        return -1;
      }
      return 0;
    });
    console.log(sortbyOldest);

    const sortbyNewest: Product[] = product.sort((item1, item2) => {
      if (item1.created_at > item2.created_at) {
        return -1;
      }
      if (item1.created_at < item2.created_at) {
        return 1;
      }
      return 0;
    });
    console.log(sortbyNewest);

    const sortbyHighPrice: Product[] = product.sort((item1, item2) => {
      if (item1.price.slice(2) > item2.price.slice(2)) {
        return 1;
      }
      if (item1.price.slice(2) < item2.price.slice(2)) {
        return -1;
      }
      return 0;
    });
    console.log(sortbyHighPrice);

    const sortbyLowPrice: Product[] = product.sort((item1, item2) => {
      if (item1.price > item2.price) {
        return -1;
      }
      if (item1.price < item2.price) {
        return 1;
      }
      return 0;
    });
    console.log(sortbyLowPrice);
  };

  const onDismiss = () => {
    setOpen(false);
  };

  return (
    <span className={classes.filterButtonContainer}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={classes.filterButton}
      >
        <img src={filterIcon} className={classes.filterIcon} />
        Filter
      </button>
      <BottomSheet open={open} onDismiss={onDismiss}>
        <div className={classes.bottomsheet}>
          <h1>Filter</h1>
          <p>Category</p>
          <div className={classes.categoryFilter}>
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
                <label className={classes.radioCategory}>
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
                <label className={classes.radioCategory}>
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
                <label className={classes.radioCategory}>
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
                <label className={classes.radioCategory}>
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
          <p>Sort by</p>
          <div className={classes.popularityFilter}>
            <label className={classes.radioPopularity}>
              Popularity
              <input
                type="radio"
                value="Popularity"
                id="popularity"
                name="filter"
                onChange={(e) => setSortby(e.target.value)}
              />
            </label>
            <label className={classes.radioPopularity}>
              Newest
              <input
                type="radio"
                value="Newest"
                id="newest"
                name="filter"
                onChange={(e) => setSortby(e.target.value)}
              />
            </label>
            <label className={classes.radioPopularity}>
              Oldest
              <input
                type="radio"
                value="Oldest"
                id="oldest"
                name="filter"
                onChange={(e) => setSortby(e.target.value)}
              />
            </label>
            <label className={classes.radioPopularity}>
              High Price
              <input
                type="radio"
                value="High Price"
                id="highprice"
                name="filter"
                onChange={(e) => setSortby(e.target.value)}
              />
            </label>
            <label className={classes.radioPopularity}>
              Low Price
              <input
                type="radio"
                value="Low Price"
                id="lowprice"
                name="filter"
                onChange={(e) => setSortby(e.target.value)}
              />
            </label>
            <label className={classes.radioPopularity}>
              Review
              <input
                type="radio"
                value="Review"
                id="review"
                name="filter"
                onChange={(e) => setSortby(e.target.value)}
              />
            </label>
          </div>
          <span className={classes.applyFilterButton}>
            <button type="submit" onClick={filterHandler}>
              Apply filter
            </button>
          </span>
        </div>
      </BottomSheet>
    </span>
  );
};

export default BottomSheetFilter;
