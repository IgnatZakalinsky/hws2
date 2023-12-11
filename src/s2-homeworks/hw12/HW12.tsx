import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {changeThemeId, InitStateType, themeReducer} from './bll/themeReducer'
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
    item: themeReducer,
})
export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
const HW12 = () => {
    // взять ид темы из редакса

    const item = useAppSelector((state) => state)
    const themeId = item.item.themeId
    const dispatch = useDispatch()
    console.log(themeId)
    const change = (id: number) => { // дописать функцию.
        dispatch(changeThemeId(id))

    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
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
                        value={themeId}
                        // сделать переключение тем
                    />
                </div>
            </div>


    )
}

export default HW12
