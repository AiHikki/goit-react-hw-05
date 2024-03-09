import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../movies-api';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { createImgURL, formatDate } from '../../utils';
import StarRate from '../StarRate/StarRate';
import c from './MovieReviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchData(`movie/${movieId}/reviews`);
        setReviews(results);
      } catch (error) {
        toast.error('Oops! Something went wrong. Try reloading the page', { id: 'error' });
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}

      {reviews.length > 0 ? (
        <ul className={c.list}>
          {reviews?.map(
            ({
              id,
              content,
              author_details: { name, username, rating, avatar_path },
              created_at,
            }) => (
              <li key={id}>
                <div className={c.userInfoContainer}>
                  <div className={c.userInfo}>
                    <img
                      src={createImgURL(avatar_path)}
                      alt={`${name} avatar`}
                      className={c.avatar}
                    />
                    <div>
                      <span>@{username}</span>
                    </div>
                  </div>

                  <StarRate rating={rating} />
                </div>
                <p className={c.comment}>{content}</p>
                <span className={c.date}>{formatDate(created_at)}</span>
              </li>
            )
          )}
        </ul>
      ) : (
        <div>There aren&apos;t any reviews yet</div>
      )}
      <Toaster />
    </div>
  );
};

export default MovieReviews;
