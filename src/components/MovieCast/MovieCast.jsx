import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { createImgURL } from '../../utils';
import c from './MovieCast.module.css';
import { useDispatch } from 'react-redux';
import { fetchMovieById } from '../../redux/moviesOps';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const { cast } = await dispatch(fetchMovieById(`${movieId}/credits`)).unwrap();
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCredits();
  }, [dispatch, movieId]);

  return (
    <div>
      <ul className={c.list}>
        {cast?.map(({ id, name, character, profile_path }) => (
          <li className={c.listItem} key={id}>
            <div className={c.imageContainer}>
              <img src={createImgURL(profile_path)} alt={name} />
            </div>
            <div className={c.actorDesc}>
              <span className={c.name}>{name}</span>
              <span className={c.character}>{character}</span>
            </div>
          </li>
        ))}
      </ul>
      {/* {isLoading && <Loader />} */}
      <Toaster />
    </div>
  );
};

export default MovieCast;
