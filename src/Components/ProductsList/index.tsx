import React, { FC } from "react";

import { CartItem, Product } from "../../Store/interfaces";
import ProductCard from "../ProductCard";

import s from "./ProductsList.module.css";

interface IProps {
  prodacts?: Array<Product | CartItem>;
  inCart?: boolean;
  title?: string;
  fontSize?: number | string;
  onButtonClick?: (e: CartItem | number ) => void
}

const ProductsList: FC<IProps> = ({
  title = "",
  fontSize,
  inCart = false,
  prodacts = [],
  onButtonClick,
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
            onButtonClick={onButtonClick}
          />
        ))}
      </ul>
    </>
  );
};
export default ProductsList;
