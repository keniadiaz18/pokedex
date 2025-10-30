import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (builder) => ({
    getPokemons: builder.query<PokemonListResponse, number>({
      query: (limit = 20) => `pokemon?limit=${limit}`,
    }),
    getPokemonByName: builder.query<PokemonDataResponse, string>({
      query: (pokemonName) => `pokemon/${pokemonName}`,
    }),
    }), 
});

export const {useGetPokemonsQuery, useGetPokemonByNameQuery} = pokemonApi;