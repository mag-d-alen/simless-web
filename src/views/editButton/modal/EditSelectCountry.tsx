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
    <div className=" flex-column">
      <Select
        options={countriesList}
        isMulti={true}
        onChange={(selected) => {
          setCountries(selected);
        }}
      />
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
