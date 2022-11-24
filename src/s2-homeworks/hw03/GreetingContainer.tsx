import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
    // если имя пустое - показать ошибку: setError('Ошибка! Введите имя!'),
    // иначе - добавить юзера при помощи addUserCallback и очистить инпут засетав ''
    // проверить на пустоту можно при помощи метода trim(). К примеру: name.trim() !== ''
    // ЕСЛИ НЕ БУДЕТ ПОЛУЧАТЬСЯ, НЕ РАССТРАИВАЙСЯ. НА ЧЕТВЕРТОМ ЗАНЯТИИ ПО ТУДУЛИСТУ НАУЧИМ), НО ВСЕ ТАКИ ПОПЫТАЙСЯ))
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName('some name') // need to fix

        error && setError('')
    }
    const addUser = () => {
        // это всего лишь функция стрелочник- она всего лишь получает
        //сигнал из компоненты <Greeting/> и вызывает pureAddUser (с кучей аргументов)
        // ЗДЕСЬ НИЧЕГО ПИСАТЬ НЕ НУЖНО-ВСЕ ОК

        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        // все тоже самое, что и в addUser -функция стрелочник
        // всего лишь получает сигнали из компоненты <Greeting/> и вызывает pureOnBlur (с кучкой аргументов)
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        // и здесь все тоже самое...)
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

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
