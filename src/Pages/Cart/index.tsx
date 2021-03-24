import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../Store/store";
import {
  fetchProductList,
  fetchCart,
  addToCart, deleteFromCart,
} from "../../Store/Actions/actions";

import { CartItem } from "../../Store/interfaces";
import AddNewProductForm from "../../Forms/AddNewProductForm";
import ProductsList from "../../Components/ProductsList";
import Preloader from "../../Components/Preloader";

import s from "./Cart.module.css";
import {OnAddToCart, OnDeleteFromCart} from "./types";

const ShoppingCart = () => {
  const { products, productLoading, cart, cartLoading } = useSelector(
    (state: RootState) => state.Products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(fetchCart());
  }, []);

  const onAddToCart = (cartItem: CartItem) => dispatch(addToCart(cartItem));
  const onDeleteFromCart = (cartItemId : number) => dispatch(deleteFromCart(cartItemId));

  // @ts-ignore
  return (
    <div className={s.cart_wrapper}>
      <div className={s.cart_contents}>
        <div className={s.cart_header}>
          <label> Shopping Cart </label>
        </div>
        {cartLoading ? (
          <Preloader />
        ) : (
            // @ts-ignore
          <ProductsList fontSize={20} prodacts={cart} inCart onButtonClick={onDeleteFromCart}/>
        )}
        <div className={s.cart_total}>
          <div>total:</div>
          <div className={s.total_sum}>50$</div>
        </div>
      </div>
      <AddNewProductForm />
      {productLoading ? (
        <Preloader />
      ) : (
        <ProductsList
          title={"Recommended Products"}
          prodacts={products}
            // @ts-ignore
          onButtonClick={onAddToCart}
        />
      )}
    </div>
  );
};

export default ShoppingCart;
