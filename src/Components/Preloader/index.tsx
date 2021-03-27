import React, { FC } from "react";
import clsx from "clsx";

import s from "./Preloader.module.css";

interface Iprops {
  small?: boolean;
  size?: number;
}

const Preloader: FC<Iprops> = ({ small = false, size = 19 }) => {
  return (
    <>
      {small ? (
        <div className={s.loading} style={{ width: size, height: size }} />
      ) : (
        <div className={s.wrap}>
          <div className={s.bounce_loading}>
            <div className={s.bounceball}></div>
            <div className={s.text}>{"loading..."}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Preloader;
