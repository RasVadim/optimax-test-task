import React, { FC } from "react";

import { CartItem, Product } from "../../Store/interfaces";
import ProductCard from "../ProductCard";
import Preloader from "../Preloader";

import s from "./ProductsList.module.css";

interface IProps {
  products?: Array<Product | CartItem>;
  inCart?: boolean;
  title?: string;
  fontSize?: number | string;
  onButtonClick?: (e: CartItem | number) => void;
  loading: boolean;
}

const ProductsList: FC<IProps> = ({
  title = "",
  fontSize,
  inCart = false,
  products = [],
  onButtonClick,
  loading = false,
}) => {
  if (loading) {
    return <Preloader />;
  }
  return (
    <>
      {title && <div className={s.title}>{title}</div>}
      <ul className={s.product_list}>
        {products.map((product) => (
          <ProductCard
            fontSize={fontSize}
            product={product}
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
