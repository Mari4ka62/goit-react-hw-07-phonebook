import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/filterSlice';
export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>Find contacts by name</label>
      <input
        type="text"
        onChange={e =>
          dispatch(setFilter(e.currentTarget.value.toLocaleLowerCase()))
        }
        name="filter"
        // value={filterData}
        className={css.filterInput}
      />
    </div>
  );
}
Filter.propTypes = {
  filterData: PropTypes.string,
  onChange: PropTypes.func,
};
