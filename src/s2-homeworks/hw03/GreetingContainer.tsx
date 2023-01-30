import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void): void => {
    if(name.trim()){
        addUserCallback(name)
        setName('')
        return 
    }
    setError('Ошибка! Введите имя!')
}   

export const pureOnBlur = (name: string, setError: Dispatch<SetStateAction<string>>) => { // если имя пустое - показать ошибку
   if (!name.trim())
        setError('Ошибка! Введите имя!')
}

export const pureOnEnter = ( e: KeyboardEvent<HTMLInputElement>, addUser:()=>void ) => {
    if(e.key==='Enter'){
       addUser()
    } // если нажата кнопка Enter - добавить
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') 
    const [error, setError] = useState<string>('') 

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[totalUsers-1] // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName?lastUserName.name:''}
        />
    )
}

export default GreetingContainer
