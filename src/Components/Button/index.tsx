import React, {FC, memo} from "react";
import clsx from "clsx";

import s from "./Button.module.css";

interface IProps {
  isForm?: boolean;
  txtBtn?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  color?: "red" | "green";
  width?: number | "auto";
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
}) => {
  return (
    <button
      className={clsx(s.button, {
        [s.small]: small,
        [s[color]]: color,
        [customClassName]: true,
      })}
      style={{ width }}
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
export default memo(Button);
