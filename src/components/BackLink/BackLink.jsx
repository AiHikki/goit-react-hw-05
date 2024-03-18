import { IoArrowBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import c from './BackLink.module.css';

const BackLink = ({ to }) => {
  return (
    <div>
      <Link to={to}>
        <IoArrowBackCircle color="white" size={36} />
      </Link>
    </div>
  );
};

export default BackLink;
