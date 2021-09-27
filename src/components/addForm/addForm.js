import s from './addForm.module.css'
import { useState } from 'react'

const AddForm = ({ addForm }) => {
    const [value, setValue] = useState('');
    const [wages, setWages] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onChangeWages = (e)=>{
        setWages(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addForm(value,wages);
        setValue('')
        setWages('')
    }
    return (
        <form onSubmit={onSubmit} className={s.addForm}>
            <h2>Добавьте нового сотрудника</h2>
            <input
                onChange={onChange}
                value={value}
                placeholder="Как его зовут?"
                type="text"></input>
            <input
                onChange={onChangeWages}
                value={wages}
                placeholder="з/п в $"
                type="text"></input>
            <button type="submit">добавить</button>
        </form>
    )
}
export default AddForm;