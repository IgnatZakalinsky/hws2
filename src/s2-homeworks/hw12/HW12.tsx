import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {changeThemeId, themeReducer} from './bll/themeReducer'
import {combineReducers, legacy_createStore} from "redux";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const rootReducer = combineReducers({
    theme: themeReducer,
})
export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
const HW12 = () => {
    // взять ид темы из редакса
    const item = useAppSelector((state) => state.theme.themeId)
    const themeId = 3
    const dispatch = useDispatch()
    console.log(typeof item)
    const change = (id: number) => { // дописать функцию.
        console.log(id)
        dispatch(changeThemeId(id))
    }


    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
        console.log(document.documentElement.dataset.theme)
    }, [themeId])

    return (

            <div id={'hw12'}>
                <div id={'hw12-text'} className={s2.hwTitle}>
                    Homework #12
                </div>

                <div className={s2.hw}>
                    <SuperSelect
                        id={'hw12-select-theme'}
                        className={s.select}
                        onChangeOption={change}
                        options={themes}
                        value={2}
                        // сделать переключение тем
                    />
                </div>
            </div>


    )
}

export default HW12
