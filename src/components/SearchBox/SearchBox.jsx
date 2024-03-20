import { IoSearchOutline } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import c from './SearchBox.module.css';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleChange = e => {
    const value = e.target.value;
    searchParams.set('query', value);
    setSearchParams(searchParams);
  };

  return (
    <div className={c.container}>
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
    </div>
  );
};

export default SearchBox;
