import { FC } from "react"
import { IUser } from "../types/types"
import UserItem from '../components/UserItem'

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {

    return (
        <div>
            {
                users.map(item => (
                    <UserItem key={item.id} user={item}/>
                ))
            }
        </div>
    )
}

export default UserList