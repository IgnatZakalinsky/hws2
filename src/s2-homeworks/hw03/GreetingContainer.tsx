import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3"

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string | null) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    if (name.trim() !== "") {
        addUserCallback(name)
        setName("")
    } else {
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnBlur = (name: any, setError: any) => {
    if (name.trim() === "") {
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (e.key === "Enter") {
        addUser()
    }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)

        error && setError("")
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setTotalUsers(++totalUsers)
        setLastUserName(name)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    let [totalUsers, setTotalUsers] = useState(0)
    let [lastUserName, setLastUserName] = useState("")

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
