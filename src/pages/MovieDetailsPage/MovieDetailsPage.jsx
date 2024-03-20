import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import { createImgURL } from '../../utils';
import StarRate from '../../components/StarRate/StarRate';
import BackLink from '../../components/BackLink/BackLink';
import c from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { fetchMovieById } from '../../redux/moviesOps';

const buildLinkClass = ({ isActive }) => {
  return clsx(c.link, isActive && c.isActive);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const payload = await dispatch(fetchMovieById(movieId)).unwrap();
        setMovie(payload);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [dispatch, movieId]);

  return (
    <div>
      <BackLink to={backLinkRef.current} />
      <div className={c.movieInfoContainer}>
        <div className={c.poster}>
          <img src={createImgURL(movie?.poster_path)} alt={`${movie?.title} poster`} />
        </div>
        <div className={c.movieDesc}>
          <p className={c.title}>{movie?.title}</p>
          <p className={c.overview}>{movie?.overview}</p>
          <div className={c.genres}>
            <span className={c.bold}>Genres: </span>
            {movie?.genres?.map(({ name }) => name).join(', ')}
          </div>
          <div className={c.extraInfo}>
            <div className={c.date}>
              <span className={c.bold}>Release date: </span> {movie?.release_date}
            </div>
            <div className={c.rating}>
              <StarRate rating={movie?.vote_average} />
              <div className={c.votes}>{movie?.vote_count}</div>
            </div>
          </div>
        </div>
      </div>

      <nav className={c.navigation}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </nav>

      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>

      <Toaster />
    </div>
  );
};

export default MovieDetailsPage;
