import { FC, useState, useCallback, useEffect } from "react";
import { IToDo } from "../../types/types";
import { useParams, useHistory } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

interface ITodoItemPage {
  index: string;
}

const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState<IToDo>();
  const history = useHistory();

  const params = useParams<ITodoItemPage>();

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = useCallback(async () => {
    const response: AxiosResponse<IToDo> = await await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${params.index}`
    );
    try {
      setTodo(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const onClickBack = useCallback(
      () => {
          history.push('/todos')
      },
      [],
  )
  return (
    <div>
      <button onClick={onClickBack}>Back</button>
      <div>
        <h1>List ToDo {todo?.id}</h1>
        <p>{todo?.title}</p>
        <p>Completed {todo?.completed}</p>
      </div>
    </div>
  );
};

export default TodoItemPage;
