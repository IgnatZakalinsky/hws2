import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (
    name: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    addUserCallback: (name: string) => void
    ) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name === "") {
        setError("Ошибка! Введите имя!");
    }
    setName(name);
    addUserCallback(name);
};

export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => { // если имя пустое - показать ошибку
    if (name === "") {
        setError("Ошибка! Введите имя!");
    }
};

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
  if(e.key === "Enter") {
      addUser();
  }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const [totalUsers, setTotalUsers] = useState<number>(0); // need to fix
    const [lastUserName, setLastUserName] = useState<string>(name); // need to fix



    const setNameCallback = (e: React.FormEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value.trim()); // need to fix
        error && setError("");
    };
    const addUser = () => {
        if(name) {
        setLastUserName(name);
        pureAddUser(name, setError, setName, addUserCallback);
        setTotalUsers(totalUsers + 1);
        setName("");
        }
    };

    const onBlur = () => {
        pureOnBlur(name, setError);
    };

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser);
    };



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
    );
};

export default GreetingContainer;
