import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { createImgURL, formatDate } from '../../utils';
import StarRate from '../StarRate/StarRate';
import c from './MovieReviews.module.css';
import { useDispatch } from 'react-redux';
import { fetchMovieById } from '../../redux/moviesOps';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const { results } = await dispatch(fetchMovieById(`${movieId}/reviews`)).unwrap();
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCredits();
  }, [dispatch, movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews?.map(
            ({
              id,
              content,
              author_details: { name, username, rating, avatar_path },
              created_at,
            }) => (
              <li className={c.listItem} key={id}>
                <div className={c.userInfo}>
                  <div className={c.user}>
                    <img
                      src={createImgURL(avatar_path)}
                      alt={`${name} avatar`}
                      className={c.avatar}
                    />
                    <div className={c.username}>@{username}</div>
                  </div>
                  <div>
                    <StarRate rating={rating} />
                  </div>
                </div>

                <div className={c.commentContainer}>
                  <p className={c.comment}>{content}</p>
                  <div className={c.date}>{formatDate(created_at)}</div>
                </div>
              </li>
            )
          )}
        </ul>
      ) : (
        <div>There aren&apos;t any reviews yet.</div>
      )}
      <Toaster />
    </div>
  );
};

export default MovieReviews;
