import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { packagesUri } from "../../data/data";

export const packagesApi = createApi({
  reducerPath: "getPackages",
  baseQuery: fetchBaseQuery({ baseUrl: packagesUri }),
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: (choosenCountries: string[]) => `/${choosenCountries}`,
    }),
  }),
});

export const { useGetPackagesQuery } = packagesApi;
