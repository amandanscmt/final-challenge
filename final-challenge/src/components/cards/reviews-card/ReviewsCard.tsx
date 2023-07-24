import classes from "./ReviewsCard.module.css";

import userIcon from "../../../assets/userpic.png";
import Star from "../Star";

interface Review {
  user: string;
  description: string;
  rating: number;
}

const ReviewsCard = (props: Review) => {
  return (
    <div className={classes.reviewsContainer}>
      <span className={classes.userImg}>
        <img src={userIcon} />
      </span>
      <span className={classes.userReview}>
        <p className={classes.userName}>{props.user}</p>
        <Star rating={props.rating} />
        <p className={classes.reviewDescription}>{props.description}</p>
      </span>
    </div>
  );
};

export default ReviewsCard;
