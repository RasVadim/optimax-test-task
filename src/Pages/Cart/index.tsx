import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductsList from "../../Components/ProductsList";

import s from "./Cart.module.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.cart_wrapper}>
      <div className={s.cart_contents}>
        <div className={s.cart_header}>
          <label> Shopping Cart </label>
        </div>
        <ProductsList />
        <div className={s.cart_total}>
          <div>total:</div>
          <div className={s.total_sum}>50$</div>
        </div>
      </div>
      <ProductsList title={"Recommended Products"} />
    </div>
  );
};

export default ShoppingCart;
