import React, { FC, memo, useEffect } from "react";
import { Field, InjectedFormProps, Normalizer, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

import { deleteFromCart } from "../../Store/Actions/actions";
import { getCounterValueById } from "../../Store/Selectors/selectors";
// import {moreLess, number} from "../../Forms/validators";

import Button from "../Button";
import Input from "../Input";

import s from "./ProductCounter.module.css";
import { lessThan, number } from "../../Forms/validators";

const fieldId: unique symbol = Symbol();

interface IProps {
  productId: number;
  quantity?: number;
  loading?: boolean;
}

interface counterType {
  [fieldId]: string;
}

const ProductCounter: FC<InjectedFormProps<counterType, IProps> & IProps> = ({
  quantity = 1,
  productId,
  handleSubmit,
  change,
  loading,
}) => {
  const dispatch = useDispatch();
  const counterId = String(productId);
  const count = useSelector(getCounterValueById(counterId));

  useEffect(() => {
    change(counterId, quantity || 1);
  }, [quantity]);

  const incrementQuantity = () => +count < 99 && change(counterId, +count + 1);
  const decrementQuantity = () =>
    count <= 1
      ? dispatch(deleteFromCart(productId))
      : change(counterId, +count - 1);

  return (
    <div className={s.counter}>
      <Button
        small
        width={25}
        txtBtn={"-"}
        onClick={decrementQuantity}
        loading={loading}
      />
      <form onSubmit={handleSubmit}>
        <Field
          name={counterId}
          component={Input}
          type="number"
          customClassName={s.count_input}
          disabled={loading}
          height="auto"
          normalize={lessThan(100)}
        />
      </form>
      <Button
        small
        width={25}
        txtBtn={"+"}
        onClick={incrementQuantity}
        loading={loading}
      />
    </div>
  );
};

const CounterForm = reduxForm<counterType, IProps>({
  form: "CounterForm",
  destroyOnUnmount: false,
})(ProductCounter);

export default memo(CounterForm);
