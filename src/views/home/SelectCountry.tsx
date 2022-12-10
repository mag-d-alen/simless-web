import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputActionMeta } from "react-select";
import Select from "react-select";
import { countriesList } from "../../data/data";
import { SelectedCountriesType } from "../../data/types";
import { setSelectedCountries } from "../../redux/SimActionsSlice";
import { Button } from "../editButton/modal/Button";

export const SelectCountry = () => {
  const [countries, setCountries] = useState<SelectedCountriesType | []>([]);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center px-8 mx-1 mt-4 mb-6">
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "#a854f7",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            background:
              state.isSelected || state.isFocused
                ? state.isSelected
                  ? "rgba(168, 84, 247, 0.644)"
                  : "rgba(168, 84, 247, 0.213)"
                : "white",
          }),
        }}
        options={countriesList}
        isMulti={true}
        onChange={(selected) => {
          setCountries(selected);
        }}
      />

      <div className="flex my-10">
        <Button
          handleClick={() => {
            countries.length && dispatch(setSelectedCountries(countries));
          }}
          text=" בחר מדינת היעד"
        />
      </div>
    </div>
  );
};
