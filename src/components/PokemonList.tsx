import React from "react";
import { useGetPokemonsQuery } from "../api/PokemonApi";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css"

const PokemonList: React.FC = () => {
    const {data: pokemonsData, error, isLoading} = useGetPokemonsQuery(20);
    const pokemonList = pokemonsData?.results;

    if(isLoading) return <p>Loading Pokemons...</p>;
    if(error) return <p>Error loading pokemons</p>;
    if (!pokemonsData?.results) return <p>No Pokemons found</p>;


      return (
        <div className="pokemonTable">
            {pokemonList?.map((pokemon) => (
                <div
                key={pokemon.name}
                className="clickablePokemon">
                <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
                </div>
            ))}
        </div>
    );
};

export default PokemonList;