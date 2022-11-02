import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactFormInputType } from "../../data/types";
import { contactUrl } from "../../data/data";
export const contactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({ baseUrl: contactUrl }),
  endpoints: (builder) => ({
    postMessage: builder.mutation<any, ContactFormInputType>({
      query: ({ name, email, message, phone }) => ({
        url: "sendContactUsMessage",
        method: "POST",
        body: { name, email, message, phone },
      }),
    }),
  }),
});

export const { usePostMessageMutation } = contactApi;
