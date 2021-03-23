import React, { FC } from "react";
import clsx from "clsx";

import Button from "../Button";
import Input from "../Input";

import s from "./ProductCounter.module.css";

interface IProps {
  onSet?: () => void;
  quantity: number;
}

const ProductCounter: FC<IProps> = ({ onSet, quantity = 1 }) => {
  return (
    <div className={s.counter}>
      <Button small txtBtn={"-"} />
      <Input customClassName={s.count_input} defaultValue={quantity} />
      <Button small txtBtn={"+"} />
    </div>
  );
};
export default ProductCounter;
