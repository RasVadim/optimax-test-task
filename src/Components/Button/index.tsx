import React, { FC, memo } from "react";
import clsx from "clsx";

import s from "./Button.module.css";
import Preloader from "../Preloader";

interface IProps {
  isForm?: boolean;
  txtBtn?: string;
  onClick?: (e: any) => void;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  color?: "red" | "green";
  width?: number | "auto";
  height?: number | "auto";
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
  color = "",
  children,
  width = "auto",
  height = "auto",
}) => {
  return (
    <button
      className={clsx(s.button, {
        [s.small]: small,
        [s[color]]: color,
        [customClassName]: true,
      })}
      style={{ width, height }}
      type={isForm ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <Preloader small size={small ? 15 : 19} />
      ) : (
        <>
          {children && <div className={s.icon}>{children}</div>}
          {txtBtn}
        </>
      )}
    </button>
  );
};
export default memo(Button);
