import React, { FC } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import s from "./AddNewProductForm.module.css";

interface IProps {}

const AddNewProductForm: FC<InjectedFormProps<IProps>> = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={s.new_product_form}
    >
      <div className={s.name}>
        <Field
          name={"name"}
          label={"name"}
          required={true}
          component={Input}
          tabIndex={1}
          autoFocus={true}
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
      <div className={s.quantity}>
        <Field
          name={"quantity"}
          label={"quantity"}
          component={Input}
          tabIndex={2}
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
      <div className={s.price}>
        <Field
          name={"price"}
          label={"price"}
          component={Input}
          tabIndex={3}
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
      <div className={s.button}>
        <Button isForm>Add product</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "AddNewProductForm",
  enableReinitialize: true,
})(AddNewProductForm);