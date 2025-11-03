import React, { useState } from "react";
import { useGetPokemonsQuery } from "../api/PokemonApi";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css"
import PokemonModal from "./PokemonModal";

const PokemonList: React.FC = () => {


    const {data: pokemonsData, error, isLoading} = useGetPokemonsQuery(20);
    const [selectedPokemon, setSelectedPokemon] = useState<string | null>();
    const pokemonList = pokemonsData?.results;

    const handleSelect = (pokemonName: string) => {
        setSelectedPokemon(pokemonName)
    }

    const handleClose = () => {
        setSelectedPokemon(null);
    }

    if(isLoading) return <p>Loading Pokemons...</p>;
    if(error) return <p>Error loading pokemons</p>;
    if (!pokemonsData?.results) return <p>No Pokemons found</p>;


      return (
        <div className="pokemonTable">
            {pokemonList?.map((pokemon) => (
                <div
                key={pokemon.name}
                onClick={() => handleSelect(pokemon.name)}
                className="clickablePokemon">
                <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
                </div>
            ))}
            {selectedPokemon && (
                <PokemonModal selectedPokemon={selectedPokemon} onClose={() => handleClose()}/>  
            )}

        </div>
    );
};

export default PokemonList;