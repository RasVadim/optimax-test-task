import React, { FC } from "react";

import Button from "../Button/Button";

import ProductImg from "../../Icons/In_box";
import s from "./ProductCard.module.css";

interface IProps {
  fontSize?: number | string;
}

const ProductCard: FC<IProps> = ({ fontSize = 16 }) => {
  return (
    <div className={s.product_wrapper} style={{ fontSize }}>
      <div className={s.product_img}>
        <ProductImg />
      </div>

      <div className={s.info}>
        <div className={s.title}> Product name </div>
        <div className={s.description}> Product description </div>
      </div>
      <Button loading />
      <Button small />
      <div className={s.price}>15$</div>
    </div>
  );
};
export default ProductCard;
