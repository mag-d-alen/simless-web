import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialTopuUpState, InvoiceType } from "../data/types";
const initialState: InitialTopuUpState = {
  topUpSimNumber: "",
  invoice: {
    first_Name: "",
    last_Name: "",
    company: "",
    sim: "",
    email: "",
    phone: "",
   identity_No:"",
    // street: "",
    // country: "",
    // city: "",
    // additionalPhone: "",
  },
  payment: {
    first_Name: "",
    last_Name: "",
    company: "",
    sim: "",
    email: "",
    phone: "",
   identity_No:"",
    // street: "",
    // country: "",
    // city: "",
    // additionalPhone: "",
  },
  checkoutStep: 1,
  topUpAmount: "",
  orderId: 187,
  paymentSuccess: null,
};

export const topUpSlice = createSlice({
  name: "topUp",
  initialState,
  reducers: {
    setTopUpSimNumber: (
      state: InitialTopuUpState,
      action: PayloadAction<string>
    ) => {
      return { ...state, topUpSimNumber: "372" + action.payload };
    },
    setTopUpSimAmount: (
      state: InitialTopuUpState,
      action: PayloadAction<string>
    ) => {
      return { ...state, topUpAmount: action.payload + ".00" };
    },
    resetTopUpSimAmount: (
      state: InitialTopuUpState,
      action: PayloadAction<string>
    ) => {
      return { ...state, topUpAmount: action.payload };
    },
    setOrderId: (state: InitialTopuUpState, action: PayloadAction<number>) => {
      return { ...state, orderId: state.orderId + action.payload };
    },
    setUserInvoiceInfo: (
      state: InitialTopuUpState,
      action: PayloadAction<InvoiceType>
    ) => {
      return { ...state, invoice: action.payload };
    },
    setUserPaymentInfo: (
      state: InitialTopuUpState,
      action: PayloadAction<InvoiceType>
    ) => {
      return { ...state, payment: action.payload };
    },
    resetUserInvoiceInfo: (
      state: InitialTopuUpState,
      action: PayloadAction<null>
    ) => {
      return { ...state, invoice: initialState.invoice };
    },
    resetUserPaymentInfo: (
      state: InitialTopuUpState,
      action: PayloadAction<null>
    ) => {
      return { ...state, payment: initialState.payment };
    },
    setCheckoutStep: (
      state: InitialTopuUpState,
      action: PayloadAction<number>
    ) => {
      if (action.payload === -1 && state.checkoutStep > 1) {
        return { ...state, checkoutStep: state.checkoutStep - 1 };
      }
      return { ...state, checkoutStep: action.payload };
    },
    setPaymentSuccess: (
      state: InitialTopuUpState,
      action: PayloadAction<boolean>
    ) => {
      return { ...state, paymentSuccess: action.payload };
    },
  },
});
export const {
  setTopUpSimNumber,
  setTopUpSimAmount,
  resetTopUpSimAmount,
  setOrderId,
  setUserInvoiceInfo,
  setUserPaymentInfo,
  setCheckoutStep,
  resetUserInvoiceInfo,
  resetUserPaymentInfo,
  setPaymentSuccess,
} = topUpSlice.actions;
export default topUpSlice.reducer;
