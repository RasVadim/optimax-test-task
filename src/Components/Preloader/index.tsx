import React, { FC } from "react";
import clsx from "clsx";

import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.wrap}>
      <div className={s.loading}>
        <div className={s.bounceball}></div>
        <div className={s.text}>{"loading..."}</div>
      </div>
    </div>
  );
};
export default Preloader;
