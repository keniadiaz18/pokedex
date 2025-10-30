import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../api/PokemonApi';
import PokemonCard from './PokemonCard';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useGetPokemonByNameQuery(query, {
    skip: !query,
  });

  const handleSearch = () => {

  }

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        className="border p-2 rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div className="mt-4">
        {isLoading && <p>Buscando...</p>}
        {error && <p>No encontrado.</p>}
        {data && <PokemonCard name={data.name} />}
      </div>
    </div>
  );
};

export default SearchBar;
