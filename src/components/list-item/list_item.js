import Item from './item';
import './list_item.scss';
import { memo } from 'react';
// import { useDispatch } from 'react-redux';

const ListItem = ({ state }) => {
  // console.log('renderListItem');

  const item = state.map((elem) => {
    return (
      <li key={elem.id} className={elem.marked ? 'li color' : 'li'}>
        <Item
          key={elem.id}
          id={elem.id}
          name={elem.name}
          marked={elem.marked}
          raise={elem.raise}
          wages={elem.wages}
        />
      </li>
    );
  });
  return (
    <div className="listItem">
      <ul>{item}</ul>
    </div>
  );
};
export default ListItem;
