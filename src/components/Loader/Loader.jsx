import { ThreeDots } from 'react-loader-spinner';
import c from './Loader.module.css';

const Loader = () => {
  return (
    <div className={c.loader}>
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#fff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
