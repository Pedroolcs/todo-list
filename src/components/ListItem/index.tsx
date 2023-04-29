import * as C from './style'
import { Item } from '../../types/Item'
import { FaTrash } from 'react-icons/fa'

interface Props {
    item: Item
    onChange: (id: number, done: boolean) => void
}

function ListItem({ item, onChange }: Props) {
    
    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}

export default ListItem