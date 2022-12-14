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
    <FormEntryContainer className=" flex items-center justify-center w-full relative">
      <Field
        className="flex border  border-purple-100 rounded-lg w-full overflow-auto p-4 resize focus: border-purple-600"
        style={{ fontFamily: "Lato", fontSize: "2rem" }}
        {...field}
        {...props}></Field>
      {meta.touched && meta.error ? (
        <ErrorAlert>{meta.error}</ErrorAlert>
      ) : null}
    </FormEntryContainer>
  );
};
