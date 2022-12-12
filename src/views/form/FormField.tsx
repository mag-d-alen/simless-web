import { Field } from "formik";
import React from "react";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import { InputField } from "./form.styled";

export const FormField: React.FC<{ name: string; type: any }> = ({ name }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => (
        <InputField
          type="text"
          {...field}
          placeholder={splitAndCapitalize(name)}
        />
      )}
    </Field>
  );
};
