import Cards, { CardVariant } from './components/Cards';
import UserList from './components/UserList';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { IToDo, IUser } from './types/types';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample'


const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodo] = useState<IToDo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);


  const pages = [1, 2, 3, 4, 5];
  const limits = [5, 15, 25, 50, 100, 200];

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [page, limit]);

  async function fetchUsers() {
    const response: AxiosResponse<IUser[]> = await axios.get('https://jsonplaceholder.typicode.com/users', {
      params: { _page: page, _limit: limit }
    });
    try {
      setUsers(response.data)
    } catch (e) {
      console.log(e);
    }
  }
  const fetchTodos = async () => {
    const response: AxiosResponse<IToDo[]> = await axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: { _page: page, _limit: limit }
    });
    try {
      setTodo(response.data)
    } catch (e) {
      console.log(e);
    }
  }
  const onClickPage = (item: number): void => {
    setPage(item);
  }
  const onClickLimit = (item: number): void => {
    setLimit(item);
  }
  return (
    <div>

      {/* <Cards width='200px'
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => { console.log(num) }}>
        <button>Send</button>
      </Cards> */}

      <div style={{ display: 'flex', cursor: 'pointer' }}>
        Pages:
        {pages.map((item, i) => (
          <div style={{
            border: item === page ?
              '2px solid red' : '1px solid black',
            padding: '10px'
          }}
            onClick={() => onClickPage(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        Limit:
        {limits.map((item, i) => (
          <div style={{
            border: item === limit ?
              '2px solid green' : '1px solid black',
            padding: '3px'
          }}
            onClick={() => onClickLimit(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: IToDo) => <TodoItem todo={todo} key={todo.id} />} />

      <EventsExample />

    </div>
  )
}

export default App