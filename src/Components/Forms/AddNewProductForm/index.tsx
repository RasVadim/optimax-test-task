import React, { FC } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import Input from "../../Input";
import Button from "../../Button/Button";

import s from "./AddNewProductForm.module.css";

interface IProps {

}

const AddNewProductForm: FC<InjectedFormProps<IProps>> = ({ handleSubmit }) => {
  return (
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <div className={s.wrapper}>
          <div className={s.mb15}>
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
          <div className={s.mb15}>
            <Field
                name={"quantity"}
                label={"quantity"}
                component={Input}
                tabIndex={2}
                autoComplete="off"
                autoCorrect="off"
            />
          </div>
          <div className={s.mb15}>
            <Field
                name={"price"}
                label={"price"}
                component={Input}
                tabIndex={3}
                autoComplete="off"
                autoCorrect="off"
            />
          </div>
          <div className={s.btnGroup}>
            <Button
                isForm
            >
              ADD
            </Button>
          </div>
        </div>
      </form>
  );
};

export default reduxForm({
  form: "AddNewProductForm",
  enableReinitialize: true,
})(AddNewProductForm);
