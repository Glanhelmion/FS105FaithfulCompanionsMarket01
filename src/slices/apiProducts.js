import { BIRDS_URL, CATS_URL, DOGS_URL, FISHES_URL, PETFOOD_URL, ACCESSORIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBirds: builder.query({
      query: () => ({
        url: BIRDS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getBirdDetails: builder.query({
      query: (birdId) => ({
        url: `${BIRDS_URL}/${birdId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getCats: builder.query({
      query: () => ({
        url: CATS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getCatsDetails: builder.query({
      query: (catId) => ({
        url: `${CATS_URL}/${catId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getDogs: builder.query({
      query: () => ({
        url: DOGS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getDogsDetails: builder.query({
      query: (dogId) => ({
        url: `${DOGS_URL}/${dogId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getFishes: builder.query({
      query: () => ({
        url: FISHES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getFishesDetails: builder.query({
      query: (fishId) => ({
        url: `${FISHES_URL}/${fishId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getPetFood: builder.query({
      query: () => ({
        url: PETFOOD_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getPetFoodDetails: builder.query({
      query: (petFoodId) => ({
        url: `${PETFOOD_URL}/${petFoodId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getAccessories: builder.query({
      query: () => ({
        url: ACCESSORIES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getAccessoriesDetail: builder.query({
      query: (accessoryId) => ({
        url: `${ACCESSORIES_URL}/${accessoryId}`,
      }),
      keepUnusedDataFor: 5,
    })
  }),
});

export const { useGetBirdsQuery, useGetBirdDetailsQuery, useGetCatsQuery, useGetCatsDetailsQuery, useGetDogsQuery, useGetDogsDetailsQuery, useGetFishesQuery, useGetFishesDetailsQuery, useGetPetFoodQuery, useGetPetFoodDetailsQuery, useGetAccessoriesQuery, useGetAccessoriesDetailQuery } = productApiSlice;
