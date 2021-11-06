import './App.css';
import Search from '../search/search';
import ListItem from '../list-item/list_item';
import AddForm from '../addForm/addForm';
import { useSelector } from 'react-redux';

function App() {
  const arr = useSelector((state) => state.arr);
  const filterName = useSelector((state) => state.arrFilter);
  const filter = useSelector((state) => state.filter);

  let newArr = [];
  if (filterName.length !== 0) {
    newArr = arr.filter((item) => item.name.includes(filterName));
  } else {
    newArr = arr;
  }
  // console.log(newArr);
  switch (filter) {
    case 'all':
      break;
    case 'marked':
      newArr = arr.filter((item) => item.marked);
      break;
    case 'wages':
      newArr = arr.filter((item) => item.wages > 1000);
      break;
    case 'ascending':
      // console.log(newArr);
      newArr = newArr.sort((a, b) => a.wages - b.wages);
      break;
    default:
  }
  // console.log(newArr);
  arr.filter((item) => item.marked);
  const raise = arr.filter((item) => item.raise);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Учет сотрудников в компании N</h2>
        <h4>Обшее количество сотрудников: {arr.length}</h4>
        <h4>Премию получат: {raise.length}</h4>
      </header>
      <Search />
      <ListItem state={newArr} />
      <AddForm />
    </div>
  );
}

export default App;
