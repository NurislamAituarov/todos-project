import { useState } from 'react';
import './search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { search, filter } from '../actions/action';

const Search = () => {
  const filterName = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(search(e.target.value));
  };

  return (
    <div className="search">
      <input value={value} onChange={onChange} placeholder="найти сотрудника" type="text"></input>
      <button
        className={filterName === 'all' ? 'show' : null}
        onClick={() => dispatch(filter('all'))}>
        Все сотрудники{' '}
      </button>
      <button
        className={filterName === 'marked' ? 'show' : null}
        onClick={() => dispatch(filter('marked'))}>
        На повышение
      </button>
      <button
        className={filterName === 'wages' ? 'show' : null}
        onClick={() => dispatch(filter('wages'))}>
        з/п больше 1000$
      </button>
      <button
        // className={filterName === 'ascending' ? 'show' : null}
        onClick={() => dispatch(filter('ascending'))}>
        по возрастанию
      </button>
    </div>
  );
};
export default Search;
