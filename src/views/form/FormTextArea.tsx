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
        component="textarea"
        rows="6"
        className="inline-block border p-4 text-xs border-purple-100 rounded-lg w-full overflow-wrap p-4 resize border-purple-200 focus:ring-purple-500 focus:border-purple-500"
        style={{ fontFamily: "Lato", fontSize: "2rem" }}
        {...field}
        {...props}></Field>
      {meta.touched && meta.error ? (
        <ErrorAlert>{meta.error}</ErrorAlert>
      ) : null}
    </FormEntryContainer>
  );
};
