import { CUSTOMERS_URL } from '../constants';
import apiSlice from './apiSlice';

export const customersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => ({
        url: CUSTOMERS_URL,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetCustomersQuery } = customersApiSlice;
