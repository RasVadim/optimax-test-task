import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductsList from "../../Components/ProductsList";
import AddNewProductForm from "../../Forms/AddNewProductForm";

import s from "./Cart.module.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
const products = [
  {
    id: "1",
    name: "Product name 1",
    price: 5,
    description: "Product description 1",
    quantity: 1
  },
  {
    id: "2",
    name: "Product name 2",
    price: 10,
    description: "Product description 2",
    quantity: 1
  },
  {
    id: "3",
    name: "Product name 3",
    price: 15,
    description: "Product description 3",
    quantity: 1
  },
  {
    id: "4",
    name: "Product name 4",
    price: 20,
    description: "Product description 4",
    quantity: 1
  },
]

  return (
    <div className={s.cart_wrapper}>
      <div className={s.cart_contents}>
        <div className={s.cart_header}>
          <label> Shopping Cart </label>
        </div>
        <ProductsList fontSize={20} prodacts={products}/>
        <div className={s.cart_total}>
          <div>total:</div>
          <div className={s.total_sum}>50$</div>
        </div>
      </div>
        <AddNewProductForm />
      <ProductsList title={"Recommended Products"} prodacts={products} />
    </div>
  );
};

export default ShoppingCart;
