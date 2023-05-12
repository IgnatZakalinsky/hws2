import React, { useState, useEffect } from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { restoreState } from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<Date>(
    new Date(restoreState('hw9-date', Date.now()))
  );
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(intervalId as unknown as number);
  };

  const stop = () => {
    clearInterval(timerId);
    setTimerId(undefined);
  };

  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  useEffect(() => {
    if (timerId === undefined) return;
    return () => {
      clearInterval(timerId);
    };
  }, [timerId]);

const qdate = new Date();
const day = qdate.getDate().toString().padStart(2, '0');
const qmonth = (qdate.getMonth() + 1).toString().padStart(2, '0');
const year = qdate.getFullYear().toString();
const qdateString = `${day}.${qmonth}.${year}`;

  const dateString = date.toLocaleDateString('en-US', 
  {
    
    day: 'numeric',
    weekday: 'long',
    month: 'numeric',
    year: 'numeric'
  });
  const timeString = date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const monthString = date.toLocaleDateString('en-US', 
  {
    month: 'long',

  });
  const [dayOfWeek, month] = dateString.split(',');
  // let newString: string = month.replace(/\//g, '.');

  const stringTime = date.toLocaleTimeString('ru-Ru') || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = date.toLocaleDateString('ru-Ru') || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date) || <br/>
  const stringMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date) || <br/>

  
  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay} </span>
        <span id={'hw9-time'}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
           
              <span id={'hw9-month'}>{stringMonth} </span> { " " }
              <span id={'hw9-date'}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          disabled={timerId !== undefined}
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          disabled={timerId === undefined}
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;