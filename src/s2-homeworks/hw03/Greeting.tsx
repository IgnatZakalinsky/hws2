import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    onBlur: any // need to fix any
    onEnter: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
    lastUserName?: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = s.errorInput // need to fix with (? s.errorInput : s.input)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()}
                    // ДАВАЙТЕ ПРОСЛЕДИМ БОЕВОЙ ПУТЬ addUser:
                    // ОТСЮДА ОН ВСПЛЫВЕТ В КОМПОНЕНТЕ GreetingContainer И ВЫЗОВЕТ pureAddUser->
                    // А В pureAddUser ЛИБО ВЫДАСТ ОШИБКУ (ЕСЛИ ПУСТОЙ name) ИЛИ ЗАПУТСИТ addUserCallback->
                    // КОТОРЫЙ ВСПЛЫВЕТ В КОМПОНЕНТЕ <HW3/> И ВЫЗОВЕТ pureAddUserCallback->
                    // КОТОРЫЙ СОЗДАСТ НОВЫЙ ОБЪЕКТ И ЗАСЕТАЕТ ЕГО В users НЕ ПОТЕРЯВ И СТАРЫХ ЮЗЕРОВ
                >
                    add
                </button>
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
