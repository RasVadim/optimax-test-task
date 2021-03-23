import React, {FC, memo} from "react";

import Button from "../Button";
import ProductCounter from "../ProductCounter";

import ProductImg from "../../Icons/In_box";
import s from "./ProductCard.module.css";

interface IProps {
  fontSize?: number | string;
  id: string;
  title: string;
  price: number;
  img: string
  quantity?: number;
  description?: string;
  inCart?: boolean;
}

const ProductCard: FC<IProps> = ({
  fontSize = 16,
  id = "",
  title = "",
  price,
  img= '',
  quantity = 1,
  description = "",
  inCart = false,
}) => {
  return (
    <div className={s.product_wrapper} style={{ fontSize }}>
      <div className={s.product_img}>
          {img ? <img src={img} style={{height: 75}} /> :<ProductImg/> }
      </div>

      <div className={s.info}>
        <div className={s.title}> {title} </div>
        <div className={s.description}> {description} </div>
      </div>
      <div className={s.buttons}>
        {inCart ? (
          <Button txtBtn={"Remove"} color={"red"} small />
        ) : (
          <Button txtBtn={"Add to cart"} color={"green"} width={95} />
        )}
      </div>
      <div className={s.price}>
        {price}$
          {inCart && <ProductCounter quantity={quantity}/>}
      </div>
    </div>
  );
};
export default memo(ProductCard);
