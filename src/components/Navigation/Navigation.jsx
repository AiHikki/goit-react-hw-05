import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { IoIosPulse } from 'react-icons/io';
import c from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(c.link, isActive && c.isActive);
};

const Navigation = () => {
  return (
    <header className={c.header}>
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
    </header>
  );
};

export default Navigation;
