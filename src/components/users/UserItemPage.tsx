import axios, { AxiosResponse } from "axios";
import { FC, useState, useEffect,useCallback } from "react";
import { IUser } from "../../types/types";
import { useParams, useHistory } from "react-router-dom";

interface IUserItemPageParams {
  index: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser| null>(null);
    const params = useParams<IUserItemPageParams>();
    const history = useHistory();
     
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const response:AxiosResponse<IUser>= await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.index}`
    );
    try {
        console.log('good');
        
      setUser(response.data);
      console.log(user?.username)
    } catch (e) {
      console.log(e);
    }
  };

  const onClickBack = useCallback(
      ():void => {
         history.push('/users')
      },
      [],
  )

  return (
    <div>
        <button onClick={onClickBack}>Back</button>
        <div>
            <h1>User page {user?.name}</h1>
            <p>Phone number{user?.phone}</p>
            <p>Email{user?.email}</p>
            <p>His address{user?.address.city}</p>
            <p>Website {user?.website}</p>
            <p>Company {user?.company.catchPhrase}</p>
        </div>
    </div>
  ) 
};

export default UserItemPage;
