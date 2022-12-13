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
    <FormEntryContainer
      className=" flex items-center justify-center w-full "
      {...field}
      {...props}>
      <textarea
        className="flex border self-center border-purple-100 rounded-lg w-full overflow-auto h-40 focus: border-purple-600"
        style={{ fontFamily: "Lato" }}
      />
      {meta.touched && meta.error ? (
        <ErrorAlert>{meta.error}</ErrorAlert>
      ) : null}
    </FormEntryContainer>
  );
};
