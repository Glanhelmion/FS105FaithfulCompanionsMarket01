import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// export const BASE_URL = process.env.NODE_ENV === 'development' ?
//   'http://localhost:5000' : '';

export const BASE_URL = '';
export const ACCESSORIES_URL = '/api/accessoriespage';
export const BIRDS_URL = '/api/birdpage';
export const CATS_URL = '/api/catpage';
export const DOGS_URL = '/api/dogpage';
export const FISHES_URL = '/api/fishpage';
export const PETFOOD_URL = '/api/petfoodpage';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';
export const STRIPE_URL = '/api/config/stripe';
export const UPLOAD_URL = '/api/upload'

const baseQuery = fetchBaseQuery({ baseUrl:''});
const TAG_TYPES = ['Accessories', 'Birds', 'Cats', 'Dogs', 'Fishes', 'PetFood', 'Order', 'User'];

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery,
//   tagTypes: TAG_TYPES,
//   endpoints: (builder) => ({}),
// });

// export const { useGetAccessoriesQuery, useGetBirdsQuery, useGetCatsQuery, useGetDogsQuery, useGetFishesQuery, useGetPetfoodQuery } = apiSlice;

// export const { reducer: apiReducer } = apiSlice;


//  These constants will help maintain consistency and avoid hardcoding URLs throughout your application.
//  It defines several constants for different URLs that your frontend application will use to make requests to your backend API. By using constants like these, you can easily update URLs in one place if your API routes change or if you deploy your frontend to a different environment.