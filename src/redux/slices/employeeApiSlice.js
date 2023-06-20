import { EMPLOYEES_URL } from '../constants';
import apiSlice from './apiSlice';

export const employeeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        url: EMPLOYEES_URL,
      }),
      keepUnusedDataFor: 3,
    }),
  }),
});

export const { useGetEmployeesQuery } = employeeApiSlice;
