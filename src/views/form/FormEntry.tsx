import React from "react";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import { ErrorAlert } from "./form.styled";
import { FormField } from "./FormField";
import Select from "react-select";
import { countriesList } from "../../data/data";
const handleChange = () => {};
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
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name">
          {splitAndCapitalize(inputfield)}
        </label>
        <div className="flex justify-center content-center  ">
          {inputfield === "sim" || inputfield === "country" ? (
            inputfield === "sim" ? (
              <div className="flex gap-4 items-center flex-1">
                +372
                <FormField name={inputfield} type={inputfield} />{" "}
              </div>
            ) : (
              <Select
                name={inputfield}
                options={countriesList}
                onChange={(selected: any) =>
                  setValues({ ...values, country: selected.label })
                }
              />
            )
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
