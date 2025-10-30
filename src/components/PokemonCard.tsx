import { useGetPokemonByNameQuery } from "../api/PokemonApi";

const PokemonCard = ({pokemonName}: any) => {
    
    const {data: individualPokemonData, isLoading, error} = useGetPokemonByNameQuery(pokemonName);
    if(isLoading) return <div className="bg-gray-200 p-4 rounded"> Loading Pokemons...</div>;

    return(
        <div key={pokemonName} className="bg-gray-100 p-4 rounded shadow text-center">
            <img 
            src={individualPokemonData?.sprites.front_default}
            alt={pokemonName}
            className="w-24 h-24 mx-auto"
            /> 
            <h2 className="text-center capitalize font-bold mt-2">{pokemonName}</h2>
            {/* <p className="text-center text-sm text-gray-600">
                {individualPokemonData?.height} 
            </p>*/}
        </div>
    );
};

export default PokemonCard;
