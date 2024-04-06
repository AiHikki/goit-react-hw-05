import { useState, useEffect } from 'react';
import clsx from 'clsx';
import c from './Header.module.css';
import 'animate.css';

const Header = ({ children }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={clsx(c.header, !visible && c.hidden, 'animate__animated', 'animate__slideInDown')}
    >
      {children}
    </header>
  );
};

export default Header;
