import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SelectedCountriesType } from "../../../data/types";
import { setSelectedCountries } from "../../../redux/SimActionsSlice";
import Select from "react-select";

import { ModalButtons } from "./ModalButtons";
import { countriesNamesList } from "../../../data/list_iso3166_a3";

export const EditSelectCountry: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const [countries, setCountries] = useState<SelectedCountriesType | []>([]);
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-1 flex-col justify-center h-full">
      <div className="w-100">
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: "rgba(168, 84, 247, 0.644)",
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
      </div>
      <ModalButtons
        closeDialog={closeDialog}
        clickHandler={() => {
          countries.length && dispatch(setSelectedCountries(countries));
          closeDialog();
        }}
      />
    </div>
  );
};
