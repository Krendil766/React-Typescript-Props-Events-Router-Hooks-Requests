import { FC } from "react";
import { IUser } from "../../types/types";

interface IUserItemProps {
  user: IUser;
  onClickId: (user: IUser) => void;
}

const UserItem: FC<IUserItemProps> = ({ user, onClickId }) => {
  return (
    <div>
      {
        <div onClick={()=>onClickId(user)} style={{ padding: 5, border: "1px solid black", cursor:'pointer' }}>
          {user.id}. {user.name} проэивает по адрессу: город {user.address.city}
          , улица {user.address.street}
          <p>
            Сайт его компании{" "}
            <a href={`http://${user.website}`}>{user.website}</a>
          </p>
        </div>
      }
    </div>
  );
};

export default UserItem;
