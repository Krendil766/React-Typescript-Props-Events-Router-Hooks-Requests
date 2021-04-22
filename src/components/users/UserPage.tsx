import { FC, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IUser } from "../../types/types";
import List from "../List";
import UserItem from "./UserItem";
import { useHistory } from "react-router-dom";

interface UserPageProps {
  page: number;
  limit: number;
}

const UserPage: FC<UserPageProps> = ({ page, limit }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response: AxiosResponse<IUser[]> = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        params: { _page: page, _limit: limit },
      }
    );
    try {
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem user={user} key={user.id} onClickId={(user) => history.push(`/users/${user.id}`)} />
      )}
    />
  );
};

export default UserPage;
