import Item from "./item";
import s from './list_item.module.css'
const ListItem = ({ state, onMarked, onDeleted, onSpan }) => {

    const item = state.map(elem => {
        let className = 'li';
        if (elem.marked) {
            className = 'color'
        }

        return (
            <li className={s[className]} key={elem.id}>
                <Item
                    onDeleted={() => onDeleted(elem.id)}
                    onMarked={() => onMarked(elem.id)}
                    onSpan={()=>onSpan(elem.id)}
                    name={elem.name}
                    marked={elem.marked}
                    raise={elem.raise}
                    wages={elem.wages} />
            </li>
        )
    })
    return (
        <div className={s.listItem}>
            <ul>
                {item}
            </ul>
        </div>
    )
}
export default ListItem;