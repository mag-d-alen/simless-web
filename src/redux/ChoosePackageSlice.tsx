import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialChoosePackageType,
  RatesService,
  SelectedCountryType,
} from "../data/types";
const initialState: InitialChoosePackageType = {
  selectedCountries: [],
  availablePackages: [],
  loading: false,
};

export const choosePackageSlice = createSlice({
  name: "choosePackage",
  initialState,
  reducers: {
    setSelectedCountries: (
      state: InitialChoosePackageType,
      action: PayloadAction<SelectedCountryType>
    ) => {
      return { ...state, selectedCountries: action.payload };
    },
    setAvailablePackages: (
      state: InitialChoosePackageType,
      action: PayloadAction<any>
    ) => {
      return { ...state, availablePackages: action.payload };
    },
    setLoading: (
      state: InitialChoosePackageType,
      action: PayloadAction<boolean>
    ) => {
      return { ...state, loading: action.payload };
    },
  },
});
export const { setSelectedCountries, setAvailablePackages, setLoading } =
  choosePackageSlice.actions;
export default choosePackageSlice.reducer;
