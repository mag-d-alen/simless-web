import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SelectedCountriesType } from "../../../data/types";
import { setSelectedCountries } from "../../../redux/SimActionsSlice";
import Select from "react-select";
import { countriesList } from "../../../data/data";
import { ModalButtons } from "./ModalButtons";

export const EditSelectCountry: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const [countries, setCountries] = useState<SelectedCountriesType | []>([]);
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-col justify-center h-full">
      <div className="w-100">
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor:
                state.isFocused || state.menuIsOpen
                  ? "grey"
                  : "rgba(168, 84, 247, 0.644)",
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              background: "rgba(168, 84, 247, 0.307)",
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
