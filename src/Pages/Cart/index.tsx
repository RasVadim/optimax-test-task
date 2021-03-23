import {useEffect} from "react";
import {useDispatch, useSelector,} from "react-redux";

import {RootState} from "../../Store/store";
import {fetchProductList} from "../../Store/Actions/actions";

import AddNewProductForm from "../../Forms/AddNewProductForm";
import ProductsList from "../../Components/ProductsList";
import Preloader from "../../Components/Preloader";

import s from "./Cart.module.css";

const ShoppingCart = () => {
  const { products, loading } = useSelector(
    (state: RootState) => state.Products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  return (
    <div className={s.cart_wrapper}>
      <div className={s.cart_contents}>
        <div className={s.cart_header}>
          <label> Shopping Cart </label>
        </div>
        <ProductsList fontSize={20} prodacts={products} inCart />
        <div className={s.cart_total}>
          <div>total:</div>
          <div className={s.total_sum}>50$</div>
        </div>
      </div>
      <AddNewProductForm />
      {loading ? (
        <Preloader />
      ) : (
        <ProductsList title={"Recommended Products"} prodacts={products} />
      )}
    </div>
  );
};

export default ShoppingCart;
