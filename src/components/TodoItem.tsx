import { FC } from "react"
import { IToDo } from "../types/types"

interface TodoItemProps {
    todo:IToDo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {

    return (
        <div>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. Список дел: {todo.title}
        </div>
    )
}

export default TodoItem