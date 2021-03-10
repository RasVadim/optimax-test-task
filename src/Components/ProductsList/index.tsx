import React, { FC } from "react";

import ProductCard from "../ProductCard";

import s from "./ProductsList.module.css";

interface IProps {
  title?: string;
}

const ProductsList: FC<IProps> = ({ title = "" }) => {
  return (
    <>
      {title && <div className={s.title}>{title}</div>}
      <ul className={s.product_list}>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
    </>
  );
};
export default ProductsList;
