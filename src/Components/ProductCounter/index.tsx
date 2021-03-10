import React, { FC } from "react";
import clsx from "clsx";
import s from "./ProductCounter.module.css";
import Button from "../Button/Button";

interface IProps {
  onSet?: () => void;
}

const Index: FC<IProps> = ({ onSet }) => {
  return (
    <div className={s.counter}>
      <Button small>-</Button>
      <input />
      <Button small>+</Button>
    </div>
  );
};
export default Index;
