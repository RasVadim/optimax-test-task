import React, { FC } from "react";

import ProductCard from "../ProductCard";

import s from "./ProductsList.module.css";

interface IProps {
  title?: string;
  fontSize?: number | string;
}

const ProductsList: FC<IProps> = ({ title = "", fontSize }) => {
  return (
    <>
      {title && <div className={s.title}>{title}</div>}
      <ul className={s.product_list}>
        <li>
          <ProductCard fontSize={fontSize} />
        </li>
        <li>
          <ProductCard fontSize={fontSize} />
        </li>
        <li>
          <ProductCard fontSize={fontSize} />
        </li>
        <li>
          <ProductCard fontSize={fontSize} />
        </li>
      </ul>
    </>
  );
};
export default ProductsList;
