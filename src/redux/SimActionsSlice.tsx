import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialSimActionsState, SelectedCountriesType } from "../data/types";

const initialState: InitialSimActionsState = {
  simNumber: null,
  simStartDate: null,
  selectedCountries: [],
  addedMinutesinUSD: 0,
  addedData: null,
};
export const simActionsSlice = createSlice({
  name: "simActions",
  initialState,
  reducers: {
    setSimNumber: (
      state: InitialSimActionsState,
      action: PayloadAction<number>
    ) => {
      return { ...state, simNumber: action.payload };
    },
    setSimStartDate: (
      state: InitialSimActionsState,
      action: PayloadAction<Date>
    ) => {
      return { ...state, simStartDate: action.payload };
    },
    setSelectedCountries: (
      state: InitialSimActionsState,
      action: PayloadAction<SelectedCountriesType>
    ) => {
      return { ...state, selectedCountries: action.payload };
    },
    setAddedMinutesinUSD: (
      state: InitialSimActionsState,
      action: PayloadAction<number>
    ) => {
      return { ...state, addedMinutesinUSD: action.payload };
    },
    setAddedData: (state: InitialSimActionsState,
      action: PayloadAction<number>) => {
      return {...state, addedData:action.payload}
    }
  },
});
export const {
  setSimNumber,
  setSimStartDate,
  setSelectedCountries,
  setAddedMinutesinUSD,
  setAddedData
} = simActionsSlice.actions;
export default simActionsSlice.reducer;
