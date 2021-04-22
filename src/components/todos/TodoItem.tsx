import { FC } from "react"
import { IToDo } from "../../types/types"

interface TodoItemProps {
    todo:IToDo,
    onClickId:(todo:IToDo)=>void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onClickId }) => {

    return (
        <div onClick={()=>onClickId(todo)} style={{cursor:'pointer'}}>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. Список дел: {todo.title}
        </div>
    )
}

export default TodoItem