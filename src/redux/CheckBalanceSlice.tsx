import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialUserInfoType, SimDataType } from "../data/types";
const initialState: InitialUserInfoType = {
  userSimNumber: "",
  simData: {
    aserviceid: "",
    balance: "",
    blocked: false,
    curr: "",
    inum: "",
    onum: "",
    prepayed:false,
    tsimid: "",
  },
};

export type mainReducer = typeof initialState;

export const CheckBalanceSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserSimNumber: (
      state: InitialUserInfoType,
      action: PayloadAction<string>
    ) => {
      return { ...state, userSimNumber: "372" + action.payload };
    },
    setSimData: (
      state: InitialUserInfoType,
      action: PayloadAction<SimDataType>
    ) => {
      return { ...state, simData: action.payload };
    },
  },
});
export const { setUserSimNumber, setSimData } = CheckBalanceSlice.actions;
export default CheckBalanceSlice.reducer;
