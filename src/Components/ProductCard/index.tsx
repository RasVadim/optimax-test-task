import React, { FC, memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { debounce } from "../../utils/typeScript";
import { CartItem, Product } from "../../Store/interfaces";
import {
  changeQuantity,
  setCurrentProductId,
  totalSumLoading,
} from "../../Store/Actions/actions";
import {
  checkInCartProduct,
  getCartState,
  getCounterValueById,
  getCurrentProduct,
} from "../../Store/Selectors/selectors";
import ProductCounter from "../ProductCounter";
import Button from "../Button";

import ProductImg from "../../Icons/In_box";
import s from "./ProductCard.module.css";

interface IProps {
  fontSize?: number | string;
  product: Product & Partial<CartItem>;
  inCart?: boolean;
  onButtonClick?: (e: CartItem | number) => void;
}

const ProductCard: FC<IProps> = ({
  fontSize = 16,
  product,
  inCart = false,
  onButtonClick,
}) => {
  const {
    id,
    title = "",
    price,
    img = "",
    quantity,
    description = "",
  } = product;

  const dispatch = useDispatch();
  const { loading } = useSelector(getCartState);
  const isCurrentProduct = useSelector(getCurrentProduct) === id;
  const isAlreadyInCart = useSelector(checkInCartProduct(id));

  const count = useSelector(getCounterValueById(String(id)));

  const debounceChangeQuantity = useCallback(
    debounce((count) => {
      dispatch(
        changeQuantity({
          ...product,
          quantity: count,
        })
      );
      dispatch(totalSumLoading(false));
    }, 500),
    []
  );

  useEffect(() => {
    if (inCart && count && count !== quantity) {
      dispatch(totalSumLoading(true));
      debounceChangeQuantity(count);
    }
  }, [count]);

  const onAddToCart = () => {
    dispatch(setCurrentProductId(id));
    isAlreadyInCart
      ? dispatch(
          changeQuantity({
            ...product,
            quantity: count + 1,
          })
        )
      : dispatch(setCurrentProductId(id));
    onButtonClick?.({
      ...product,
      quantity: quantity || 1,
    });
  };

  const onDeleteFromCart = () => {
    dispatch(setCurrentProductId(id));
    onButtonClick?.(id);
  };

  return (
    <div
      className={clsx(s.product_wrapper, {
        [s.more_margin]: inCart,
      })}
      style={{ fontSize }}
    >
      <div className={s.product_img}>
        {img ? <img src={img} style={{ height: 75 }} /> : <ProductImg />}
      </div>

      <div className={s.info}>
        <div className={s.title}> {title} </div>
        <div className={s.description}> {description} </div>
      </div>
      <div className={s.buttons}>
        {inCart ? (
          <Button
            txtBtn={"Remove"}
            color={"red"}
            width={75}
            height={20}
            onClick={onDeleteFromCart}
            loading={loading.deleteItemCart && isCurrentProduct}
          />
        ) : (
          <Button
            txtBtn={"Add to cart"}
            color={"green"}
            width={95}
            onClick={onAddToCart}
            loading={loading.addItemCart && isCurrentProduct}
          />
        )}
      </div>
      <div className={s.price}>
        ${price}
        {inCart && (
          <>
            <ProductCounter
              productId={id}
              quantity={quantity}
              loading={loading.quantity}
            />
            {count > 1 && (
              <div className={s.products_sum}>{`x${count} = $${
                count * price
              }`}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default memo(ProductCard);
