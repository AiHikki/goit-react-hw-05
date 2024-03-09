import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import c from './BackLink.module.css';

const BackLink = ({ to }) => {
  return (
    <div className={c.wrapper}>
      <Link to={to}>
        <div className={c.backLink}>
          <IoIosArrowBack size={32} color="white" />
        </div>
      </Link>
      <span>Back</span>
    </div>
  );
};

export default BackLink;
