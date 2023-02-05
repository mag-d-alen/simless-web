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
    identity_No: "",
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
    identity_No: "",
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

export const invoiceFormSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
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
  },
});
export const {
  setUserInvoiceInfo,
  setUserPaymentInfo,
  resetUserInvoiceInfo,
  resetUserPaymentInfo,
} = invoiceFormSlice.actions;
export default invoiceFormSlice.reducer;
