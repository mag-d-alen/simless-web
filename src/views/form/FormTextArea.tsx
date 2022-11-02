import { Field, FieldHookConfig, useField } from "formik";
import React from "react";
import {
  ErrorAlert,
  FormStyledTextArea,

} from "./form.styled";

export const FormTextArea = (props: FieldHookConfig<any>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormStyledTextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorAlert>{meta.error}</ErrorAlert>
      ) : null}
    </>
  );
};
