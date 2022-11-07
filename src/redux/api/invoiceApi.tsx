import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
("@reduxjs/toolkit/dist/query");
import { invoiceUrl } from "../../data/data";

export const invoiceApi = createApi({
  reducerPath: "invoice",
  baseQuery: fetchBaseQuery({ baseUrl: invoiceUrl }),
  endpoints: (builder) => ({
    createInvoice: builder.mutation<any, any>({
      query: ({}) => ({
        url: "createInvoice",
        method: "POST",
        body: {},
      }),
    }),
  }),
});
export const { useCreateInvoiceMutation } = invoiceApi;

//TODO what values to send in the body to invoice API?
