import { createNextState, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialSimActionsState,
  SelectedCountriesType,
  SimOrder,
} from "../data/types";

const initialState: InitialSimActionsState = {
  simNumber: null,
  simStartDate: null,
  selectedCountries: [],
  addedMinutesInUSD: 0,
  chosenPackage: null,
  order: [],
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
    setChosenPackage: (
      state: InitialSimActionsState,
      action: PayloadAction<any>
    ) => {
      return { ...state, chosenPackage: action.payload };
    },
    setSimOrder: (
      state: InitialSimActionsState,
      action: PayloadAction<SimOrder>
    ) => {
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    },
    resetSimOrder: (
      state: InitialSimActionsState,
      action: PayloadAction<any>
    ) => {
      if (action.payload) console.log(state.simNumber);
      return {
        ...state,
        simNumber: initialState.simNumber,
        simStartDate: initialState.simNumber,
        selectedCountries: initialState.selectedCountries,
        addedMinutesInUSD: initialState.addedMinutesInUSD,
        chosenPackage: initialState.chosenPackage,
      };
    },
  },
});

export const {
  setSimNumber,
  setSimStartDate,
  setSelectedCountries,
  setAddedMinutesinUSD,
  setChosenPackage,
  setSimOrder,
  resetSimOrder,
} = simActionsSlice.actions;
export default simActionsSlice.reducer;
