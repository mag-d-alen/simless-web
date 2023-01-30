import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SimDataType, TopUpResponseType } from "../../data/types";
import { url } from "../../data/data";

export const checkAndTopUpSimApi = createApi({
  reducerPath: "checkAndTopUpSimApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getSimBalance: builder.query<any, string>({
      query: (sim) => `balance${sim}`,
    }),
    topUpSim: builder.mutation<
      TopUpResponseType,
      { num: string; amount: string; orderId: number }
    >({
      query: ({ num, amount, orderId }) => ({
        url: `topUp${num}`,
        method: "POST",
        body: { amount: amount, orderId: orderId },
      }),
    }),
  }),
});
export const {
  useGetSimBalanceQuery,
  useTopUpSimMutation,
} = checkAndTopUpSimApi;
