import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type OptionType = {
  id: string;
  value: string;
};

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: OptionType[] | undefined;
  onChangeOption?: (option: string) => void;
  value: string;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options = [],
  className,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: JSX.Element[] = options.map((o) => (
    <option
      id={'hw7-option-' + o.id}
      className={s.option}
      key={o.id}
      value={o.id}
    >
      {o.value}
    </option>
  ));

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const finalSelectClassName = s.select + (className ? ' ' + className : '');

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;