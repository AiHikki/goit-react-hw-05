import { createImgURL } from '../../utils';
import StarRate from '../StarRate/StarRate';
import c from './MoviesListItem.module.css';

const MoviesListItem = ({ movie: { poster_path, title, vote_average, vote_count } }) => {
  return (
    <div>
      <div>
        <img className={c.poster} src={createImgURL(poster_path)} alt={`${title} poster`} />
      </div>
      <div className={c.desc}>
        <p className={c.title}>{title}</p>
        <div className={c.rating}>
          <StarRate rating={vote_average} />
          <div className={c.votes}>{vote_count}</div>
        </div>
      </div>
    </div>
  );
};

export default MoviesListItem;
