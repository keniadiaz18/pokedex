import React from "react";
import { useGetPokemonsQuery } from "../api/PokemonApi";
import PokemonCard from "./PokemonCard";

const PokemonList: React.FC = () => {
    const {data: pokemonsData, error, isLoading} = useGetPokemonsQuery(20);
    const pokemonList = pokemonsData?.results;

    if(isLoading) return <p>Loading Pokemons...</p>;
    if(error) return <p>Error loading pokemons</p>;
    if (!pokemonsData?.results) return <p>No Pokemons found</p>;


      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pokemonList?.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
            ))}
        </div>
    );
};

export default PokemonList;