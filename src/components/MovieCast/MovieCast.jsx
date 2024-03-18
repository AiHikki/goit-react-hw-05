import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../movies-api';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { createImgURL } from '../../utils';
import c from './MovieCast.module.css';

const MovieCast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchData(`movie/${movieId}/credits`);
        setCredits(cast);
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
      <ul className={c.list}>
        {credits?.map(({ id, name, character, profile_path }) => (
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
      {isLoading && <Loader />}
      <Toaster />
    </div>
  );
};

export default MovieCast;
