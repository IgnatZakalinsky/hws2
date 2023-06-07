import React, {useState} from "react"
import {v1} from "uuid"
import s2 from "../../s1-main/App.module.css"
import GreetingContainer from "./GreetingContainer"

// types
export type UserType = {
    _id: string
    name: string
}

export const pureAddUserCallback = (name: string, setUsers: (users: Array<UserType>) => void, users: Array<UserType>) => {
    const user = {
        _id: v1(),
        name: name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: any) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={"hw3"}>
            <div className={s2.hwTitle}>Homework #3</div>
            <hr/>

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW3
