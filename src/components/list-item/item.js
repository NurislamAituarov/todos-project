import './list_item.scss';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleted, onMarked, onRaise } from '../actions/action';

const Item = memo(({ name, wages, raise, id, marked }) => {
  const dispatch = useDispatch();
  console.log('render');
  // console.log(marked);
  return (
    <div onClick={() => dispatch(onMarked(id))} className="span">
      <span>{name}</span>
      <div className="buttons">
        <strong className="num">{wages}$</strong>
        <div>
          <button
            onClick={(e) => {
              dispatch(onRaise(id));
              e.stopPropagation();
            }}
            className={raise ? 'marked marked-active' : 'marked'}>
            Премия
          </button>
          <button
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleted(id));
            }}>
            &times;
          </button>
        </div>
        <button className={raise ? 'hidden' : 'btn-z'}>
          <img
            className="img"
            src="https://cdn-icons-png.flaticon.com/512/3485/3485677.png"
            alt="img"></img>{' '}
        </button>
      </div>
    </div>
  );
});
export default Item;
