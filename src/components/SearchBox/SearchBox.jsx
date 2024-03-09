import toast, { Toaster } from 'react-hot-toast';
import { IoSearchOutline } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import c from './SearchBox.module.css';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleChange = e => {
    searchParams.set('query', e.target.value);
    setSearchParams(searchParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast('Type something to search');
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={c.form}>
        <label className={c.label}>
          <span className={c.searchIcon}>
            <IoSearchOutline size={24} />
          </span>
          <input
            onChange={handleChange}
            value={query}
            className={c.searchInput}
            placeholder="Search movies here"
          />
        </label>
      </form>
      <Toaster />
    </>
  );
};

export default SearchBox;
