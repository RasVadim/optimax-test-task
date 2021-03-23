import React, { FC } from "react";

import { Product } from "../../Store/interfaces";
import ProductCard from "../ProductCard";

import s from "./ProductsList.module.css";

interface IProps {
  prodacts?: Array<Product>;
  inCart?: boolean;
  title?: string;
  fontSize?: number | string;
}

const ProductsList: FC<IProps> = ({
  title = "",
  fontSize,
  inCart = false,
  prodacts = [],
}) => {
  return (
    <>
      {title && <div className={s.title}>{title}</div>}
      <ul className={s.product_list}>
        {prodacts.map((product) => (
          <ProductCard
            fontSize={fontSize}
            {...product}
            key={product.id}
            inCart={inCart}
          />
        ))}
      </ul>
    </>
  );
};
export default ProductsList;
