import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tableApi = createApi({
  reducerPath: "tableApi",
  tagTypes: ["Table"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (build) => ({
    getTable: build.query({
      query: (page) => ({
        url: `/posts?_page=${page}`,
        method: "GET",
      }),
      providesTags: ["Table"],
    }),
    sortTable: build.query({
      query: (field, direction, page) => ({
        url: `/posts?_sort=${field}&_order=${direction}&_page=${page}`,
        method: "GET",
      }),
      invalidatesTags: ["Table"],
    }),
    filtrationTable: build.query({
      query: (str) => ({
        url: `/posts?title_like=${str}`,
        method: "GET",
      }),
      invalidatesTags: ["Table"],
    }),
  }),
});
export const { useGetTableQuery, useSortTableQuery } = tableApi.endpoints;
