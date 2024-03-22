import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { IoIosPulse } from 'react-icons/io';
import c from './Navigation.module.css';
import Header from '../Header/Header';

const buildLinkClass = ({ isActive }) => {
  return clsx(c.link, isActive && c.isActive);
};

const Navigation = () => {
  return (
    <Header>
      <div className={c.navWrapper}>
        <div>
          <Link to="/">
            <IoIosPulse className={c.logo} size={40} />
          </Link>
        </div>
        <nav className={c.navigation}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </div>
    </Header>
  );
};

export default Navigation;
