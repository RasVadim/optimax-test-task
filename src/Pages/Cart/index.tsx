import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecoratedFormProps } from "redux-form";

import {
  addNewProduct,
  addToCart,
  deleteFromCart,
  fetchCart,
  fetchProductList,
} from "../../Store/Actions/actions";
import {getCartState, getCartTotalSum, getProductsState} from "../../Store/Selectors/selectors";

import { CartItem, Product } from "../../Store/interfaces";
import AddNewProductForm from "../../Forms/AddNewProductForm";
import ProductsList from "../../Components/ProductsList";
import Preloader from "../../Components/Preloader";

import s from "./Cart.module.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(
      getProductsState
  );
  const { cart, loading: cartLoading } = useSelector(
      getCartState
  );
  const totalSum = useSelector(getCartTotalSum
  );
  const totalLoading =
    cartLoading.total || cartLoading.cart || cartLoading.quantity;

  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(fetchCart());
  }, []);

  const onDeleteFromCart = (cartItemId: CartItem | number) =>
    typeof cartItemId === "number" && dispatch(deleteFromCart(cartItemId));
  const onAddToCart = (cartItem: CartItem | number) =>
    typeof cartItem !== "number" && dispatch(addToCart(cartItem));

  // ---any--- can't to use "Dispatch" type, because (Redux-form) props.reset()-function-type
  // return void Instead of AnyAction for "Dispatch" from Redux Types
  const onAddNewProduct = (
    product: Partial<Product>,
    dispatch: any,
    props: DecoratedFormProps
  ) => {
    dispatch(addNewProduct(product));
    dispatch(props?.reset?.());
  };

  return (
    <div className={s.cart_wrapper}>
      <div className={s.cart_contents}>
        <div className={s.cart_header}>
          <label> Shopping Cart </label>
        </div>
        <ProductsList
          fontSize={20}
          products={cart}
          inCart
          onButtonClick={onDeleteFromCart}
          loading={!cart.length && cartLoading.cart}
        />
        <div className={s.cart_total}>
          <div>total:</div>
          {totalLoading ? (
            <Preloader small />
          ) : (
            <div className={s.total_sum}>{`${totalSum}$`}</div>
          )}
        </div>
      </div>
      <AddNewProductForm
        onSubmit={onAddNewProduct}
        loading={loading.addProduct}
      />
      <ProductsList
        title={"Recommended Products"}
        products={products}
        onButtonClick={onAddToCart}
        loading={!products.length && loading.products}
      />
    </div>
  );
};

export default ShoppingCart;
