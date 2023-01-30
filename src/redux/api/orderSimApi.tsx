import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { paymentUri } from "../../data/data";


export const orderSimApi = createApi({
  reducerPath: "orderSim",
  baseQuery: fetchBaseQuery({ baseUrl: paymentUri }),
  endpoints: (builder) => ({
    orderSim: builder.mutation<any, any>({
      query: ({
        simNumber,
        chosenPackage,
        simStartDate,
        addedMinutesinUSD,
      }) => ({
        url: "cardPayment",
        method: "POST",
        body: { simNumber, chosenPackage, simStartDate, addedMinutesinUSD },
      }),
    }),
  }),
});

export const { useOrderSimMutation } = orderSimApi;
