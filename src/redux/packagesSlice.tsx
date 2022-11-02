import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialPackagesState } from "../data/types";
const initialState: InitialPackagesState = {
  chosenDeal: [],
};

export type mainReducer = typeof initialState;

export const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    setChosenDeal: (
      state: InitialPackagesState,
      action: PayloadAction<string>
    ) => {
      return { ...state, chosenDeal: [...state.chosenDeal, action.payload] };
    },
    resetChosenDeal: (
      state: InitialPackagesState,
      action: PayloadAction<string>
    ) => {
      return { ...state, chosenDeal: initialState.chosenDeal };
    },
  },
});
export const { setChosenDeal, resetChosenDeal } = packagesSlice.actions;
export default packagesSlice.reducer;
