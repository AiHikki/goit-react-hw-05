import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import c from './StarRate.module.css';

const StarRate = ({ rating }) => {
  const roundedRating = Math.round(rating / 0.5) * 0.5;

  return (
    <div className={c.stars}>
      {[...Array(10)].map((_, i) => (
        <div key={i}>
          {i + 1 <= roundedRating ? (
            <FaStar className={c.star} />
          ) : i + 0.5 === roundedRating ? (
            <FaStarHalfAlt className={c.star} />
          ) : (
            <FaRegStar className={c.star} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRate;
