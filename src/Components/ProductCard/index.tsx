import React, { FC } from "react";

import Button from "../Button/Button";

import ProductImg from "../../Icons/In_box";
import s from "./ProductCard.module.css";

interface IProps {
  onSet?: () => void;
}

const ProductCard: FC<IProps> = () => {
  return (
    <div className={s.product_wrapper}>
      <div className={s.product_img}>
        <ProductImg />
      </div>

      <div className={s.info}>
        <div className={s.title}> Product name </div>
        <div className={s.description}> Product description </div>
      </div>
      {/*<Button loading />*/}
      <div className={s.price}>15$</div>
    </div>
  );
};
export default ProductCard;
