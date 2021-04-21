import { FC } from 'react';
import { IUser } from '../types/types';

interface IUserItemProps {
    user: IUser
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
    return (
        <div>
            {
                <div style={{ padding: 5, border: '1px solid black' }}>
                    {user.id}. {user.name} проэивает по адрессу: город {user.address.city}, улица {user.address.street}
                    <p>Сайт его компании <a href={`http://${user.website}`}>{user.website}</a></p>
                </div>
            }
        </div>
    )
}

export default UserItem