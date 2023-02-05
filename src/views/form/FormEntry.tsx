import React from "react";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import { ErrorAlert } from "./form.styled";
import { FormField } from "./FormField";
import Select from "react-select";
import { countriesList } from "../../data/data";
import { getHebrewVersion } from "../../data/getHebrewVersion";

export const FormEntry: React.FC<{
  inputfield: string;
  errors: any;
  touched: any;
  values?: any;
  setValues?: any;
}> = ({ inputfield, errors, touched, values, setValues }) => {
  return (
    <div className="flex justify-center w-full flex-wrap mb-6">
      <div className="w-full px-3">
        <label
          className="flex justify-end mr-1 tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name">
          {getHebrewVersion(inputfield)}
        </label>
        <div className="flex justify-center content-center relative  ">
          {inputfield === "country" ? (
            <Select
              name={inputfield}
              options={countriesList}
              onChange={(selected: any) =>
                setValues({ ...values, country: selected.label })
              }
            />
          ) : (
            <FormField name={inputfield} type={inputfield} />
          )}
          {errors[inputfield] && touched[inputfield] ? (
            <ErrorAlert>{errors[inputfield]}</ErrorAlert>
          ) : null}
        </div>
      </div>
    </div>
  );
};
