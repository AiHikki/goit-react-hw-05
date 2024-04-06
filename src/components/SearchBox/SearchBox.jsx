import { IoSearchOutline } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import c from './SearchBox.module.css';
import { Formik, Form, Field } from 'formik';
import 'animate.css';
import clsx from 'clsx';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = values => {
    searchParams.set('query', values.query);
    setSearchParams(searchParams);
  };

  return (
    <div className={clsx(c.container, 'animate__animated', 'animate__slideInLeft')}>
      <Formik initialValues={{ query }} onSubmit={handleSubmit}>
        <Form>
          <div className={c.wrapper}>
            <Field
              autoComplete="off"
              className={c.searchInput}
              name="query"
              placeholder="Search..."
            />
            <button type="submit" className={c.searchBtn}>
              <IoSearchOutline size={24} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
