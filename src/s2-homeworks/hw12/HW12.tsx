import React, { useEffect } from 'react';
import s from './HW12.module.css';
import s2 from '../../s1-main/App.module.css';
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect';
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeId } from './bll/themeReducer';
import { AppStoreType } from '../hw10/bll/store';

interface Option {
  id: '1' | '2' | '3';
  value: string;
}

const themes: Option[] = [
  { id: '1', value: 'light' },
  { id: '2', value: 'blue' },
  { id: '3', value: 'dark' },
];

const HW12 = () => {
  const themeId = useSelector((state: AppStoreType) => state.theme.themeId);

  const dispatch = useDispatch();

  const change = (value: string) => {
    const id = value as '1' | '2' | '3';
    dispatch(changeThemeId(id));
  };
  console.log(themeId)

  useEffect(() => {
    if (themeId !== undefined) {
      document.documentElement.dataset.theme = themeId + ''
    }
  }, [themeId]);

  return (
    <div id={'hw12'}>
      <div id={'hw12-text'} className={s2.hwTitle}>
        Homework #12
      </div>

      <div className={s2.hw}>
        <SuperSelect
          id={'hw12-select-theme'}
          className={s.select}
          options={themes}
          value={themeId}
          onChangeOption={change}
        />
      </div>
    </div>
  );
};

export default HW12;