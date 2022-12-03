import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialChoosePackageType,
  RatesService,
  SelectedCountryType,
} from "../data/types";
const initialState: InitialChoosePackageType = {
  availablePackages: [],
  loading: false,
};

export const choosePackageSlice = createSlice({
  name: "choosePackage",
  initialState,
  reducers: {
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
export const { setAvailablePackages, setLoading } = choosePackageSlice.actions;
export default choosePackageSlice.reducer;
