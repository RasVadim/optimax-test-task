import React, { FC } from "react";

import s from "./Footer.module.css";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={s.footer_wrapper}> {currentYear} Contacts</div>
    </footer>
  );
};

export default Footer;
