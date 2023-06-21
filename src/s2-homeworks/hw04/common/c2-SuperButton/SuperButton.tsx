import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import {logDOM} from "@testing-library/react";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {



    const arr = {
        xType: xType
    }





    const finalClassName = s.button + (disabled
        ? " " + s.disabled : xType === 'red'
            ? " " + s.red + (className
            ? ' ' + className : '') : xType === 'secondary'
                ? " " + s.secondary + (className ? ' ' + className : '')
                : " " + s.default) // задачка на смешивание классов

    const finalClassName2 = `${s.button} ${disabled ? s.disabled : xType === "red" ? s.red : xType === "secondary" ? s.secondary: s.default }`
    console.log(finalClassName2);

    return (
        <button
            disabled={disabled}
            className={finalClassName2}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
