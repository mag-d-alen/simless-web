import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { CheckBalanceSlice } from "./CheckBalanceSlice";
import { topUpSlice } from "./TopUpSlice";
import { checkAndTopUpSimApi } from "./api/checkAndTopUpSimApi";
import { contactApi } from "./api/contactApi";
import { contactSlice } from "./ContactSlice";
import { orderSimApi } from "./api/orderSimApi";
import { invoiceApi } from "./api/invoiceApi";
import { simActionsSlice } from "./SimActionsSlice";
import { packagesApi } from "./api/packagesApi";

const rootReducer = combineReducers({
  [checkAndTopUpSimApi.reducerPath]: checkAndTopUpSimApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  [orderSimApi.reducerPath]: orderSimApi.reducer,
  [invoiceApi.reducerPath]: invoiceApi.reducer,
  [packagesApi.reducerPath]: packagesApi.reducer,

  checkBalance: CheckBalanceSlice.reducer,
  topUp: topUpSlice.reducer,
  contactUs: contactSlice.reducer,
  simActions: simActionsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(checkAndTopUpSimApi.middleware)
      .concat(contactApi.middleware)
      .concat(orderSimApi.middleware)
      .concat(invoiceApi.middleware)
      .concat(packagesApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
