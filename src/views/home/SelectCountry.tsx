import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { countriesNamesList } from "../../data/list_iso3166_a3";
import {
  InitialSimActionsState,
  SelectedCountriesType,
} from "../../data/types";
import { setSelectedCountries } from "../../redux/SimActionsSlice";
import { Button } from "../editButton/modal/Button";

export const SelectCountry = () => {
  const dispatch = useDispatch();

  const { selectedCountries } = useSelector((s: any) => s.simActions);

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
        onChange={(selected) => dispatch(setSelectedCountries(selected))}
      />
      <div
        className="flex content-center justify-center
      x">
        sim will be used in :
      </div>
      {selectedCountries.length
        ? selectedCountries.map((c: any) => <p key={c.value}>{c.label}</p>)
        : null}
      <div className="flex my-10"></div>
    </div>
  );
};
