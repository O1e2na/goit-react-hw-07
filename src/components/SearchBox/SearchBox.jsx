import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
    />
  );
}

export default SearchBox;
