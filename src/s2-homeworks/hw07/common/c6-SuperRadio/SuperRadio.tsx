import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from "react";
import s from "./SuperRadio.module.css";
import {log} from "util";

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, "type"> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       id,
                                                       name,
                                                       className,
                                                       options,
                                                       value,
                                                       onChange,
                                                       onChangeOption,
                                                       spanProps,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption?.(Number(e.target.value));
    };

    const finalRadioClassName = s.radio + (className ? " " + className : "");
    const spanClassName = s.span + (spanProps?.className ? " " + spanProps.className : "");

    const mappedOptions: any[] = options
        ? options.map((o) => {
            return (
                <label key={name + "-" + o.id} className={s.label}>
                    <input
                        id={id + "-input-" + o.id}
                        className={finalRadioClassName}
                        type={"radio"}
                        value={o.id}
                        checked={value === o.id}
                        // name={name}
                        // name, checked, value делают студенты

                        onChange={onChangeCallback}
                        {...restProps}
                    />
                    <span
                        id={id + "-span-" + o.id}
                        {...spanProps}
                        className={spanClassName}
                    >
                      {o.id}
                  </span>
                </label>
            );
        })
        : [];

    return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;
