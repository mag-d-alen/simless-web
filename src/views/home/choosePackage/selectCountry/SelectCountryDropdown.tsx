import React, { useState } from "react";
import { countriesList } from "../../../../data/data";
import Select from "react-select";
import { SelectedCountryType } from "../../../../data/types";

export const SelectCountryDropdown: React.FC<{
    setCountries: (country: SelectedCountryType) => void;
}> = ({ setCountries }) => {
  return (
    <Select
      options={countriesList}
      isMulti={true}
      onChange={(selected) => {
        setCountries(selected);
      }}
    />
  );
};
