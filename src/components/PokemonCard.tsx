import { useGetPokemonByNameQuery } from "../api/PokemonApi";

const PokemonCard = ({pokemonName}: any) => {
    
    const {data: individualPokemonData, isLoading, error} = useGetPokemonByNameQuery(pokemonName);
    if(isLoading) return <div className="bg-gray-200 p-4 rounded"> Loading Pokemons...</div>;


    return(
        <div key={pokemonName} className="bg-gray p-4 rounded shadow hover:shadow-lg transition">
            <img 
            src={individualPokemonData?.sprites.front_default}
            alt={pokemonName}
            className="mx-auto"
            /> 
            <h3 className="capitalize">{pokemonName}</h3>
        </div>
    );
};

export default PokemonCard;
