import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SelectedCountriesType,
} from "../../../data/types";
import { setSelectedCountries } from "../../../redux/SimActionsSlice";
import { CloseModalButton } from "./CloseModalButton";
import Select from "react-select";
import { countriesList } from "../../../data/data";

export const EditSelectCountry: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const [countries, setCountries] = useState<SelectedCountriesType | []>([]);
  const dispatch = useDispatch();
  return (
    <div className=" flex-column items-center justify-center">
      <Select
        options={countriesList}
        isMulti={true}
        onChange={(selected) => {
          setCountries(selected);
        }}
      />

      <div className=" flex flex-shrink-0 items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            countries.length && dispatch(setSelectedCountries(countries));
            closeDialog();
          }}>
          שמור השינויים
        </button>
        <CloseModalButton closeDialog={closeDialog} />
      </div>
    </div>
  );
};
