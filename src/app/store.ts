import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/PokemonApi";
import { openAIApi } from "../api/OpenAIApi";

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [openAIApi.reducerPath]: openAIApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
    .concat(pokemonApi.middleware)
    .concat(openAIApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;