import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { ParsedUrlQuery } from "querystring";
import StateManagedSelect from "react-select/dist/declarations/src/stateManager";
import { InitialSimActionsState } from "../../data/types";

const initialState: InitialSimActionsState = {
  simNumber: null,
  simStartDate: null,
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
  },
});
export const { setSimNumber, setSimStartDate } = simActionsSlice.actions;
export default simActionsSlice.reducer;
