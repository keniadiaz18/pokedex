import { useGetPokemonDescriptionQuery } from "../api/OpenAIApi";
import { useGetPokemonByNameQuery } from "../api/PokemonApi";
import "./PokemonModal.css"

const PokemonModal = ({selectedPokemon, onClose}: PokemonModal) => {
 const {data: pokemonData, error, isLoading} = useGetPokemonByNameQuery(selectedPokemon);
 const {
    data: aiDescription,
    isLoading: isAiLoading,
  } = useGetPokemonDescriptionQuery(selectedPokemon);

 if(isLoading) return <p>Loading...</p>;
 if(error) return <p>Error Loading Pokemon</p>;

 return(
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>x</button>
        <h2 className="modal-title">{pokemonData?.name}</h2>
        <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} className="modal-image" />
        <div className="modal-info">
        <p>Height: {pokemonData?.height}</p>
        <p>Weight: {pokemonData?.weight}</p>
        </div>
        <div className="modal-description">
          {isAiLoading ? (
            <p>🤖 Generating description...</p>
          ) : (
            <p>{aiDescription}</p>
          )}
        </div>
        <button className="close-details" onClick={onClose}>Close Details</button>
        </div>
    </div>
 )}

export default PokemonModal;