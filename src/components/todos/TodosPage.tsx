import axios, { AxiosResponse } from "axios";
import { FC, useState, useEffect } from "react";
import { IToDo } from "../../types/types";
import List from "../List";
import TodoItem from "./TodoItem";
import { useHistory, useParams } from "react-router-dom";

interface TodosPageProps {
  page: number;
  limit: number;
}

const TodosPage: FC<TodosPageProps> = ({ page, limit }) => {
  const [todos, setTodo] = useState<IToDo[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response: AxiosResponse<IToDo[]> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: { _page: page, _limit: limit },
      }
    );
    try {
      setTodo(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <List
      items={todos}
      renderItem={(todo: IToDo) => <TodoItem todo={todo} key={todo.id} onClickId={(todo)=>history.push(`/todos/${todo.id}`)} />}
    />
  );
};

export default TodosPage;
