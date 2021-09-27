import './App.css'
import Search from '../search/search';
import ListItem from '../list-item/list_item';
import AddForm from '../addForm/addForm';
import { useState } from 'react';


function App() {

  const [state, setState] = useState({
    arr: [
      { name: 'aaa', id: 1, wages: 120, marked: false, raise: false },
      { name: 'bbb', id: 2, wages: 2220, marked: false, raise: false },
      { name: 'ccc', id: 3, wages: 320, marked: false, raise: false },
      { name: 'ppp', id: 4, wages: 4230, marked: false, raise: false }
    ]
  })
  const [text, setText] = useState('');
  const [index, setIndex] = useState(5);
  const [filter, setFilter] = useState('All');

  const addForm = (str, wages) => {
    setIndex(index + 1)
    const item = { name: str, id: index, marked: false, wages, raise: false }
    setState(({ arr }) => {
      const newArr = [...arr, item]
      return {
        arr: newArr
      }
    })
  }
  const searchForm = (elements, text) => {
    if (text.length === 0) {
      return elements;
    }
    return elements.filter(elem => elem.name.includes(text))
  }
  const searchStr = (str) => {
    setText(str)
  }
  const onMarked = (id) => {
    setState(({ arr }) => ({
      arr: arr.map(item => {
        if (item.id === id) {
          return { ...item, marked: !item.marked }
        }
        return item
      })
    }))
    // setState(({ arr }) => {
    //   const index = arr.findIndex(elem => elem.id === id);
    //   const old = arr[index];
    //   const item = { ...old, marked: !old.marked };
    //   const newArr = [...arr.slice(0, index), item, ...arr.slice(index + 1)];

    //   return {
    //     arr: newArr
    //   }
    // })
  }
  const onDeleted = (id) => {
    setState(({ arr }) => ({
      arr: arr.filter(elem => elem.id !== id)
    }))
    // setState(({ arr }) => {
    //   const index = arr.findIndex(elem => elem.id === id);
    //   const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];

    //   return {
    //     arr: newArr
    //   }
    // })
  }
  const onSpan = (id) => {
    setState(({ arr }) => {
      const index = arr.findIndex(elem => elem.id === id);
      const old = arr[index];
      const item = { ...old, raise: !old.raise };
      const newArr = [...arr.slice(0, index), item, ...arr.slice(index + 1)];

      return {
        arr: newArr
      }
    })
  }
  const filterRaise = (elements, filter) => {
    switch (filter) {
      case 'All':
        return elements;
      case 'filter':
        return elements.filter(elem => elem.raise);
      case 'raise':
        return elements.filter(elem => elem.wages > 1000);
      default:
        return;
    }
  }
  const raise = (filter) => {
    setFilter(filter)
  }

  const newArr = filterRaise(searchForm(state.arr, text), filter)
  const prise = state.arr.filter(elem => elem.marked).length;
  return (
    <div className="App">
      <header className="App-header">
        <h2>Учет сотрудников в компании N</h2>
        <h4>Обшее количество сотрудников: {state.arr.length}</h4>
        <h4>Премию получат: {prise}</h4>
      </header>
      <Search raise={raise} searchStr={searchStr} />
      <ListItem onSpan={onSpan} state={newArr} onMarked={onMarked} onDeleted={onDeleted} />
      <AddForm addForm={addForm} />
    </div>
  );
}

export default App;
