import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: any // need to fix any
    setFilter: any  //(filter: FilterType) => void -запоминай, как типизируется useState
    deleteAffairCallback: any  //не забывай, что функция сюда приехала не пустой
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        // need to fix
        //пропс.setFilter('all')
    }
    const setHigh = () => {
        // need to fix
    }
    const setMiddle = () => {
        // need to fix
    }
    const setLow = () => {
        // need to fix
    }

    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')


    // создаем переменную=мапим наши данные (affairs)=>{
    // <вызываем компоненту <Affair в которую передаем глубже необходимые данные
    // в том числе колбэк deleteAffairCallback
    // />}
    // получается, что мы мапим массив, но он не отрисовывается тут же, а погружается
    // глубже в компоненту <Affair/> где произойдет отрисовка
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={cnAll}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={cnHigh}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={cnMiddle}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={cnLow}
                >
                    Low
                </button>
            </div>
            {/*Вот то что мы мапили на стр40 здесь используем. Можно было конечно прямо*/}
            {/*здесь мапить и разводить болото, но мы решили работать по красивому и*/}
            {/*все вынесли*/}
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
