import { Field, FieldHookConfig, useField } from "formik";
import React from "react";
import {
  ErrorAlert,
  FormEntryContainer,
  FormStyledTextArea,
} from "./form.styled";

export const FormTextArea = (props: FieldHookConfig<any>) => {
  const [field, meta] = useField(props);
  return (
    <FormEntryContainer>
      <FormStyledTextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorAlert>{meta.error}</ErrorAlert>
      ) : null}
    </FormEntryContainer>
  );
};
