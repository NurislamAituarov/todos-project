import './addForm.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/action';

const AddForm = ({ addForm }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [wages, setWages] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangeWages = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
    setWages(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(value, wages));
    setValue('');
    setWages('');
  };
  return (
    <form onSubmit={onSubmit} className="addForm">
      <h2>Добавьте нового сотрудника</h2>
      <input onChange={onChange} value={value} placeholder="Как его зовут?" type="text"></input>
      <input onChange={onChangeWages} value={wages} placeholder="з/п в $" type="text"></input>
      <button type="submit">добавить</button>
    </form>
  );
};
export default AddForm;
