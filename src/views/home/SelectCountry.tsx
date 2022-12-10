import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { countriesNamesList } from "../../data/list_iso3166_a3";
import { SelectedCountriesType } from "../../data/types";
import { setSelectedCountries } from "../../redux/SimActionsSlice";
import { Button } from "../editButton/modal/Button";

export const SelectCountry = () => {
  const [countries, setCountries] = useState<SelectedCountriesType | []>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!countries.length) dispatch(setSelectedCountries(countries));
  }, [countries]);

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
        options={countriesNamesList}
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
