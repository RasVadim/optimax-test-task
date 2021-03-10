import React, { FC } from "react";
// import {IRoute} from "~/types/Routes";
// import {ROUTES} from "~/Routes";
import Header from "./Header";
import Footer from "./Footer";

import s from "./Layout.module.css";

const DefaultLayout: FC = () => {
  // const routesByAccess: IRoute[] = useMemo(
  //     () => ROUTES.filter((route) => route.access.includes(role)),
  //     []
  // );
  // const routesForMenu: IRoute[] = useMemo(
  //     () => routesByAccess.filter((route) => route.isShownInNavigation),
  //     [routesByAccess]
  // );

  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}></div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
