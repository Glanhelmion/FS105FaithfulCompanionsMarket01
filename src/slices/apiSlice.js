import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseURL: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Accessory', 'Bird', 'Cat', 'Dog', 'Fish', 'PetFood', 'Order', 'User'],
  endpoints: (builder) => ({}),
});


