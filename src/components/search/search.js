import { useState } from 'react';
import s from './search.module.css'

const Search = ({ searchStr, filterWages, raise }) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value);
        searchStr(e.target.value)
    }
    return (
        <div className={s.search}>
            <input
                value={value}
                onChange={onChange}
                placeholder="найти сотрудника"
                type="text"></input>
            <button className={s.show} onClick={() => raise('All')}>Все сотрудники </button>
            <button className={s.btnSearch} onClick={() => raise('filter')}>На повышение</button>
            <button onClick={() => raise('raise')}>з/п больше 1000$</button>
        </div>
    )
}
export default Search;