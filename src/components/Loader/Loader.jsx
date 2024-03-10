import { InfinitySpin } from 'react-loader-spinner';
import c from './Loader.module.css';

const Loader = () => {
  return (
    <div className={c.loader}>
      <InfinitySpin visible={true} width="160" color="#fff" ariaLabel="infinity-spin-loading" />
    </div>
  );
};

export default Loader;
