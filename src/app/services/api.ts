/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  /**
   * The reducerPath is a unique key that your service will be mounted to in your store.
   *  If you call createApi more than once in your application,
   * you will need to provide a unique value each time. Defaults to 'api'.
   */
  reducerPath: "pokemonApi",
  /**
   * Set the baseUrl for every endpoint below
   * fetchBaseQuery: This is a very small wrapper around fetch that aims to simplify requests.
   */
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  /**
   * Endpoints are just a set of operations that you want to perform against your server. You define them as an object using the builder syntax.
   * There are two basic endpoint types: query and mutation.
   */
  endpoints: (builder) => ({
    getPokemons: builder.query<any, void>({
      query: () => ({ url: "pokemon" }),
    }),
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components
/**
 * Hooks are automatically generated based on the name of the endpoint in the service definition.
 * An endpoint field with getPokemonByName: builder.query() will generate a hook named useGetPokemonByNameQuery.
 */
export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
