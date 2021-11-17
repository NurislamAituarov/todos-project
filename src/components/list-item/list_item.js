import Item from './item';
import './list_item.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { useDispatch } from 'react-redux';

const ListItem = ({ state }) => {
  // console.log('renderListItem');
  const item = state.map((elem) => {
    return (
      <CSSTransition key={elem.id} timeout={500} classNames="my-node">
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
      </CSSTransition>
    );
  });
  return (
    <div className="listItem">
      <TransitionGroup components="ul">{item}</TransitionGroup>
    </div>
  );
};
export default ListItem;
