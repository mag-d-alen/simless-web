import { Field } from "formik";
import React from "react";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import {
  ErrorAlert,
  FormEntryContainer,
  FormFieldContainer,
  InputContainer,
  InputLabel,
  PhoneContainer,
} from "./form.styled";
import { FormField } from "./FormField";
import Select from "react-select";
import { countriesList } from "../../data/data";

export const FormEntry: React.FC<{
  inputfield: string;
  errors: any;
  touched: any;
  values?: any;
  setValues?: any;
}> = ({ inputfield, errors, touched, values, setValues }) => {
  return (
    <FormEntryContainer>
      <InputContainer>
        <InputLabel>{splitAndCapitalize(inputfield)}</InputLabel>
        <FormFieldContainer>
          {inputfield === "sim" || inputfield === "country" ? (
            inputfield === "sim" ? (
              <PhoneContainer>
                +372 <FormField name={inputfield} type={inputfield} />{" "}
              </PhoneContainer>
            ) : (
              <Select
                name={inputfield}
                options={countriesList}
                onChange={(selected) => {
                 selected?  setValues({ ...values, country: selected.label }): null;
                }}
              />
            )
          ) : (
            <FormField name={inputfield} type={inputfield} />
          )}
          {errors[inputfield] && touched[inputfield] ? (
            <ErrorAlert>{errors[inputfield]}</ErrorAlert>
          ) : null}
        </FormFieldContainer>
      </InputContainer>
    </FormEntryContainer>
  );
};
