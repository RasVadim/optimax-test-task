import React, { FC } from "react";
import s from "./Button.module.css";

interface IProps {
  isForm?: boolean;
  txtBtn?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<IProps> = ({
  onClick,
  txtBtn = "",
  isForm = false,
  loading = false,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={s.button}
      type={isForm ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className={s.loading} />
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
