import { createNextState, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialSimActionsState,
  SelectedCountriesType,
  SimOrderType,
} from "../data/types";

const initialState: InitialSimActionsState = {
  simNumber: null,
  newSim: false,
  simStartDate: null,
  selectedCountries: [],
  addedMinutesInUSD: 0,
  chosenPackage: undefined,
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
      return { ...state, simNumber: action.payload, newSim: false };
    },
    setNewSim: (
      state: InitialSimActionsState,
      action: PayloadAction<boolean>
    ) => {
      return { ...state, newSim: action.payload, simNumber: null };
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
    setAddedMinutesInUSD: (
      state: InitialSimActionsState,
      action: PayloadAction<number>
    ) => {
      return { ...state, addedMinutesInUSD: action.payload };
    },
    setChosenPackage: (
      state: InitialSimActionsState,
      action: PayloadAction<number | undefined>
    ) => {
      return { ...state, chosenPackage: action.payload };
    },
    setSimOrder: (
      state: InitialSimActionsState,
      action: PayloadAction<SimOrderType>
    ) => {
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    },
    updateSimOrder: (
      state: InitialSimActionsState,
      action: PayloadAction<SimOrderType[]>
    ) => {
      return {
        ...state,
        order: action.payload,
      };
    },
    resetSimOrder: (
      state: InitialSimActionsState,
      action: PayloadAction<any>
    ) => {
      if (action.payload)
        return {
          ...state,
          simNumber: initialState.simNumber,
          newSim: initialState.newSim,
          simStartDate: initialState.simStartDate,
          selectedCountries: initialState.selectedCountries,
          addedMinutesInUSD: initialState.addedMinutesInUSD,
          chosenPackage: initialState.chosenPackage,
        };
    },
  },
});

export const {
  setSimNumber,
  setNewSim,
  setSimStartDate,
  setSelectedCountries,
  setAddedMinutesInUSD,
  setChosenPackage,
  setSimOrder,
  updateSimOrder,
  resetSimOrder,
} = simActionsSlice.actions;
export default simActionsSlice.reducer;
