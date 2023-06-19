import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type OptionType = {
  id: number;
  value: string | number;
};

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: Array<OptionType>;
  onChangeOption?: (option: number) => void;
  value: string | number;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: JSX.Element[] = options
    ? options.map((o) => (
        <option id={'hw7-option-' + o.id} className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(+e.currentTarget.value);
  };

  const finalSelectClassName = s.select + (className ? ' ' + className : '');

  return (
    <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;