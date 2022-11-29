import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        // need to fix
        // пропс.функция(мне нужен _id)
        // давайте проследим боевой путь это функции, или как она будет всплывать:
        // открывай в нескольких окнах и следи:
        // отсюда она всплывет в компоненту Affairs вместе с _id ->
        // далее из Affairs всплывет в HW2->
        // в HW2 находим deleteAffairCallback- это и есть наш клиент ->
        // deleteAffairCallback вызовет setAffairs(...) и   deleteAffair(...)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {/*создаёт студент*/}
                {/* ПРОПС.ВЫВОДИМ ИМЯ*/}
                {/**/}
            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {/*создаёт студент*/}

                {/**/}
            </div>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                // need to fix
                //ОНКЛИК={ФУНКЦИЯ}
            >
                {/*текст кнопки могут изменить студенты*/}
                X
                {/**/}
            </button>
        </div>
    )
}

export default Affair
