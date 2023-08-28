import React, {useEffect, useState} from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date( Date.now()));
    const [show, setShow] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);

    const dayOfWeekFormatter = new Intl.DateTimeFormat("en", {weekday: "long"});
    const monthFormatter = new Intl.DateTimeFormat("en", {month: 'long'});


    const start = () => {
        const newTimerId = setInterval(() => {
            setDate(new Date(restoreState("hw9-date", Date.now())));
        }, 1000);
        setTimerId(newTimerId);
        setDisabled(true)
    };

    const stop = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(undefined);
            setDisabled(false)
        }
    };

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    };
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    };

    const timeIntervalFormatter = (data: number) => {
        return data.toString().length < 2 ? "0" + data : data
    }

    // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringTime = `${timeIntervalFormatter(date.getHours())}:${timeIntervalFormatter(date.getMinutes())}:${timeIntervalFormatter(date.getSeconds())}` || <br/>;

    // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    const stringDate = date.toLocaleDateString('ru-Ru') || <br/>
    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = dayOfWeekFormatter.format(date) || <br/>; // пишут студенты
    const stringMonth = monthFormatter.format(date) || <br/>; // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={"hw9-watch"}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={"hw9-day"}>{stringDay}</span>,{" "}
                <span id={"hw9-time"}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={"hw9-more"}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={"hw9-month"}>{stringMonth}</span>,{" "}
                            <span id={"hw9-date"}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={"hw9-button-start"}
                    disabled={disabled}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={"hw9-button-stop"}
                    disabled={!disabled}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;
