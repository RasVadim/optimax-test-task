import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrap}>
        <label className={s.label}>OPTIMAX</label>
        <label className={s.label}>Test task</label>
      </div>
    </header>
  );
};
export default Header;
