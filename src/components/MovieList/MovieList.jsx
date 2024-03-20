import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { Link, useLocation } from 'react-router-dom';
import c from './MovieList.module.css';
import { useSelector } from 'react-redux';
import { selectMovies } from '../../redux/moviesSlice';

const MovieList = () => {
  const location = useLocation();
  const movies = useSelector(selectMovies);

  return (
    <ul className={c.list}>
      {movies.map(movie => (
        <li className={c.listItem} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <MoviesListItem movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
