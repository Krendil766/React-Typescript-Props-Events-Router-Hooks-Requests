// import Cards, { CardVariant } from "./components/Cards";
import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import EventsExample from "./components/EventsExample";
import UserPage from "./components/users/UserPage";
import TodosPage from "./components/todos/TodosPage";
import UserItemPage from "./components/users/UserItemPage";
import TodoItemPage from './components/todos/TodoItemPage';

const App = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);

  const pages = [1, 2, 3, 4, 5];
  const limits = [5, 15, 25, 50, 100, 200];

  useEffect(() => {}, [page, limit]);

  const onClickPage = useCallback((item: number): void => {
    setPage(item);
  }, []);
  const onClickLimit = useCallback((item: number): void => {
    setLimit(item);
  }, []);
  return (
    <div>
      <div style={{ display: "flex", cursor: "pointer" }}>
        Pages:
        {pages.map((item, i) => (
          <div
            style={{
              border: item === page ? "2px solid red" : "1px solid black",
              padding: "10px",
            }}
            onClick={() => onClickPage(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", cursor: "pointer" }}>
        Limit:
        {limits.map((item, i) => (
          <div
            style={{
              border: item === limit ? "2px solid green" : "1px solid black",
              padding: "3px",
            }}
            onClick={() => onClickLimit(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <BrowserRouter>
        <div>
          <div>
            <button>
              <NavLink to="/users">Users</NavLink>
            </button>
            <button>
              <NavLink to="/todos">ToDos</NavLink>
            </button>
          </div>

          <Route path={"/users"} exact>
            <UserPage page={page} limit={limit} />
          </Route>

          <Route path={"/todos"} exact>
            <TodosPage page={page} limit={limit} />
          </Route>

          <Route path={`/users/:index`}>
            <UserItemPage />
          </Route>

          <Route path={`/todos/:index`}>
            <TodoItemPage />
          </Route>

        </div>
      </BrowserRouter>

      {/* <EventsExample /> */}
    </div>
  );
};

export default App;
