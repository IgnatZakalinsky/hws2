import React, { useState } from 'react';
import s from './HW11.module.css';
import s2 from '../../s1-main/App.module.css';
import { restoreState } from '../hw06/localStorage/localStorage';
import SuperRange from './common/c7-SuperRange/SuperRange';

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
  const [value1, setValue1] = useState<number>(restoreState<number>('hw11-value1', 0));
  const [value2, setValue2] = useState<number>(restoreState<number>('hw11-value2', 100));
  const [activeThumb, setActiveThumb] = useState<number>(0);

  const change = (event: Event, values: number | number[], activeThumb: number) => {
    if (Array.isArray(values)) {
      setValue1(values[0]);
      setValue2(values[1]);
      setActiveThumb(activeThumb);
    } else {
      setValue1(values);
      setActiveThumb(0);
    }
  };

  return (
    <div id={'hw11'}>
      <div className={s2.hwTitle}>Homework #11</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={'hw11-value'} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={'hw11-single-slider'}
              value={value1}
              onChange={(event, values) => change(event, values, 0)}
              valueLabelDisplay="off"
            />
          </div>
          <div className={s.wrapper}>
            <span id={'hw11-value-1'} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={'hw11-double-slider'}
              value={[value1, value2]}
              onChange={(event, values) => change(event, values, (values as number[]).indexOf(value1))}
              valueLabelDisplay="on"
            />
            <span id={'hw11-value-2'} className={s.number}>
              {value2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;