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


  const dateString = date.toLocaleDateString('en-US', 
  {
    weekday: 'long',
    month: 'numeric',
    day: 'numeric',
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
  const [dayOfWeek, month] = dateString.split(', ');
  const dateSplit = month.split('/')
  let newString: string = month.replace(/\//g, '.');
  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{dayOfWeek}, </span>
        <span id={'hw9-time'}>
          <strong>{timeString}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
           
              <span id={'hw9-date'}>{newString}, </span>
              <span id={'hw9-date'}>{monthString}</span>
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