import React from 'react'
import { UserType } from './HW8'
import s from './HW8.module.css'

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({ u }) => {
    return (
        <tr id={'hw8-user-' + u._id + '-' + u.age} className={s.item}>
            <td id={'hw8-user-name-' + u._id} className={s.nameCol}>
                {u.name}

            </td>
            <td id={'hw8-user-age-' + u._id}>
                {u.age}

            </td>
        </tr>
    )
}

export default User
