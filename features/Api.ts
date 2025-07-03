import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODU1NWJiYjdjZTUzY2EzNmU4ZDU3OGUiLCJuYW1lIjoiemFrYSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTc1MDQyNDUzMSwiZXhwIjoxNzU5MDY0NTMxfQ.mJOPpr4xT6fQXKbA3tDzPa4sPrDuT1EA6ozj0m6v5FY";
export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.14:3000/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getData: builder.query<any[], void>({
      query: () => "product/active",
    }),
    
    prodectByid: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `product/one`,
        method: "POST",
        body: { id: id },
      }),
    }),
    search: builder.mutation<any, { search: string }>({
      query: ({ search }) => ({
        url: `product/search`,
        method: "POST",
        body: { search: search },
      }),
    }),
    addOrder: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `cart`,
        method: "POST",
        body: { productId: id, userid: "68555bbb7ce53ca36e8d578e" },
      }),
      invalidatesTags: ['Cart'],
    }),
     delOrder: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `cart/del`,
        method: "POST",
        body: { productId: id, userid: "68555bbb7ce53ca36e8d578e" },
      }),
      invalidatesTags: ['Cart'],
    }),
     Qty: builder.mutation<any, { id: string , qty: number }>({
      query: ({ id, qty }) => ({
        url: `cart/qty`,
        method: "POST",
        body: { productId: id, userid: "68555bbb7ce53ca36e8d578e", qty: qty },
      }),
      invalidatesTags: ['Cart'],
    }),
       getCart: builder.query<any[], void>({
      query: () => ({
        url: `cart/cart`,
        method: "POST",
        body: { userid: "68555bbb7ce53ca36e8d578e" },
      }),
      providesTags: ['Cart'],
    }),

    
  }),
});

export const { useGetDataQuery, useProdectByidMutation ,useAddOrderMutation, useGetCartQuery,useDelOrderMutation,useQtyMutation,useSearchMutation} = apiSlice;
