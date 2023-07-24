import star from "../../assets/star-filled.svg";

interface Rating {
  rating: number;
}

const Star = ({ rating }: Rating) => {
  const showStars = (rating: number) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(
        <span>
          <img src={star} />
        </span>
      );
    }
    return stars;
  };
  return <div>{showStars(rating)}</div>;
};

export default Star;
