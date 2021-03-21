import React, { FC } from "react";

import Button from "../Button";
import ProductCounter from "../ProductCounter";

import ProductImg from "../../Icons/In_box";
import s from "./ProductCard.module.css";

interface IProps {
  fontSize?: number | string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  inCart?: boolean;
}

const ProductCard: FC<IProps> = ({
  fontSize = 16,
  id = "",
  name = "",
  price,
  quantity = 1,
  description = "",
  inCart = false,
}) => {
  return (
    <div className={s.product_wrapper} style={{ fontSize }}>
      <div className={s.product_img}>
        <ProductImg />
      </div>

      <div className={s.info}>
        <div className={s.title}> {name} </div>
        <div className={s.description}> {description} </div>
      </div>
      <div className={s.buttons}>
        {inCart ? (
          <Button txtBtn={"Remove"} color={"red"} />
        ) : (
          <Button txtBtn={"Add to cart"} color={"green"} />
        )}
      </div>
      <div className={s.price}>
        {price}$
        <ProductCounter quantity={quantity} />
      </div>
    </div>
  );
};
export default ProductCard;
