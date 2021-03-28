import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import { Product } from "../../Store/interfaces";
import {
  maxLength,
  maxValue,
  minLength,
  minValue,
  number,
  required,
  url,
} from "../validators";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import s from "./AddNewProductForm.module.css";

interface IProps {
  loading?: boolean;
}

const maxLength64 = maxLength(64);
const maxLength254 = maxLength(2544);
const minLength3 = minLength(3);
const maxValueMln = maxValue(1000000);
const minValue0 = minValue(0);

const AddNewProductForm: FC<InjectedFormProps<Partial<Product>> & IProps> = ({
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit} className={s.new_product_form}>
      <div className={s.name}>
        <Field
          name={"title"}
          label={"title"}
          required={true}
          component={Input}
          tabIndex={1}
          autoFocus={true}
          validate={[required, maxLength64, minLength3]}
        />
      </div>
      <div className={s.quantity}>
        <Field
          name={"description"}
          label={"description"}
          component={Input}
          tabIndex={2}
          validate={[maxLength254, minLength3]}
        />
      </div>
      <div className={s.price}>
        <Field
          name={"price"}
          label={"price in $"}
          component={Input}
          type="number"
          tabIndex={3}
          validate={[required, number, minValue0, maxValueMln]}
        />
      </div>
      <div className={s.price}>
        <Field
          name={"img"}
          label={"picture"}
          component={Input}
          tabIndex={3}
          validate={[url]}
        />
      </div>
      <div className={s.button}>
        <Button isForm txtBtn={"Add product"} width={100} loading={loading} />
      </div>
    </form>
  );
};

export default reduxForm<Partial<Product>, IProps>({
  form: "AddNewProductForm",
})(AddNewProductForm);
