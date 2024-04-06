import { RotatingLines } from 'react-loader-spinner';
import c from './Loader.module.css';

const Loader = () => {
  return (
    <div className={c.loader}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        strokeWidth="5"
        animationDuration="0.75"
        strokeColor="white"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
