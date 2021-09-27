import s from './list_item.module.css';

const Item = ({ name, marked, wages,raise, onMarked, onDeleted, onSpan }) => {

    let className = 'btn-z'
    if (raise) {
        className = 'hidden'
    }
    return (
        <div className={s.span}>
            <span onClick={onSpan} 
            >{name}
            </span>
            <div className={s.buttons}>
                <strong className={s.num}>{wages}</strong>
                <button onClick={onMarked}>marked</button>
                <button onClick={onDeleted}>&times;</button>
                <button className={s[className]}> <img className={s.img} src="https://cdn-icons-png.flaticon.com/512/3485/3485677.png" alt="img"></img> </button>
            </div>
        </div>
    )
}
export default Item;