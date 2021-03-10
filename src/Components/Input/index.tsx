import React, { FC } from "react";
import clsx from "clsx";

import s from "./Input.module.css";

interface IProps {
  label?: string;
  name: string;
  error?: string;
  type?: string;
  disabled?: boolean;
  search?: boolean;
  orange?: boolean;
  defaultValue?: string | number;
  placeholder?: string;
  customClassName?: string;
}

const Input: FC<IProps> = ({
  label,
  name,
  error,
  type = "text",
  placeholder,
  disabled = false,
  customClassName = "",
}) => {
  return (
        <div
          className={clsx(s.s_input, {
            [s.error]: error,
            [customClassName]: true,
          })}
        >
          {label && <label>{label}</label>}
          <div className={s.wrap}>
            <input
              type={type}
              name={name}
              disabled={disabled}
              placeholder={placeholder}
            />
            {error && <span className={s.error_text}>{error}</span>}
          </div>
        </div>
  );
};

export default Input;
