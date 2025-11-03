import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openAIApi = createApi({
  reducerPath: "openAIApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openai.com/v1/",
    prepareHeaders: (headers) => {
      const apiKey = ""
      if (apiKey) {
        headers.set("Authorization", `Bearer ${apiKey}`);
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPokemonDescription: builder.query<string, string>({
      async queryFn(pokemonName) {
        try {
          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "user",
                  content: `Describe al Pokémon ${pokemonName} en un párrafo breve, con tono divertido y tipo enciclopedia y en ingles.`,
                },
              ],
              max_tokens: 80,
            }),
          });

          const data = await response.json();
          return { data: data.choices[0].message.content };
        } catch (error: any) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetPokemonDescriptionQuery } = openAIApi;
