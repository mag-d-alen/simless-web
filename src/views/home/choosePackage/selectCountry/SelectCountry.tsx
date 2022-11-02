import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCountries } from "../../../../redux/ChoosePackageSlice";

import { Button } from "../../../general.styled";
import {
  SelectCountryContainer, SelectCountryDropdownContainer,
} from "./selectCountry.styled";
import { SelectCountryDropdown } from "./SelectCountryDropdown";
import { SelectedCountryType } from "../../../../data/types";

export const SelectCountry = () => {
  const [countries, setCountries] = useState<SelectedCountryType|[]>([]);
  const dispatch = useDispatch();

  return (
    <>
      <SelectCountryContainer>
        <SelectCountryDropdownContainer>
          <SelectCountryDropdown setCountries={setCountries} />
        </SelectCountryDropdownContainer>
        <Button onClick={() => dispatch(setSelectedCountries(countries))}>
          submit
        </Button>
      </SelectCountryContainer>
    </>
  );
};
