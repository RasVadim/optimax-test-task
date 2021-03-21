import React, { FC } from "react";

import Header from "./Header";
import Footer from "./Footer";

import s from "./Layout.module.css";

const DefaultLayout: FC = ({ children }) => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
