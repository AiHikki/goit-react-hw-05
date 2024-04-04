import { Toaster } from 'react-hot-toast';
import Navigation from '../Navigation/Navigation';
import c from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={c.container}>
      <Navigation />
      <main>{children}</main>
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
