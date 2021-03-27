import React, { FC } from "react";
import clsx from "clsx";

import s from "./Input.module.css";
import {WrappedFieldProps} from "redux-form";

interface IProps {
  label?: string;
  name?: string;
  height?: number | "auto"
  customClassName?: string;
}

const Input: FC<IProps & WrappedFieldProps> = ({
  label,
  name,
  height= 45,
  customClassName = "",
  input,
  meta
}) => {
  const hasError = meta.touched && meta.error

  return (
    <div
      className={clsx(s.input, {
        [s.error]: hasError,
        [customClassName]: true,
      })}
      style={{height}}
    >
      {label && <label>{label}</label>}
      <div className={s.wrap}>
        <input {...input} name={name}  />
        {hasError && <span className={s.error_text}>{meta.error}</span>}
      </div>
    </div>
  );
};

export default Input;
