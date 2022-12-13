import { Field } from "formik";
import React from "react";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";

export const FormField: React.FC<{ name: string; type: any }> = ({ name }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => (
        <Field
          {...field}
          className="block w-full text-sm bg-white text-gray-600 border-purple-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-purple-600"
          type="text"
          placeholder={`${splitAndCapitalize(name)}`}
        />
      )}
    </Field>
  );
};
