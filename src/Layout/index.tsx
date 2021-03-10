import React, { FC } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Cart from "../Pages/Cart";

import s from "./Layout.module.css";

const DefaultLayout: FC = () => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}>
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
