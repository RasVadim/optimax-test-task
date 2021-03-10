import React, { FC } from "react";
import clsx from "clsx";

import s from "./Button.module.css";

interface IProps {
  isForm?: boolean;
  txtBtn?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  customClassName?: string;
}

const Button: FC<IProps> = ({
  onClick,
  txtBtn = "",
  isForm = false,
  loading = false,
  disabled = false,
  small = false,
  customClassName = "",
  children,
}) => {
  return (
    <button
      className={clsx(s.button, {
        [s.small]: small,
        [customClassName]: true,
      })}
      type={isForm ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        small ? (
          "..."
        ) : (
          <div className={s.loading} />
        )
      ) : (
        <>
          {children && <div className={s.icon}>{children}</div>}
          {txtBtn}
        </>
      )}
    </button>
  );
};
export default Button;
