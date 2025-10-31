import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../api/PokemonApi';
import PokemonCard from './PokemonCard';

const SearchPokemon = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useGetPokemonByNameQuery(query, {
    skip: !query,
  });

  const handleSearch = () => {

  }

  return (
    <div >
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="border p-2 rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div className="mt-4">
        {isLoading && <p>Searching...</p>}
        {error && <p>Not Found.</p>}
        {data && <PokemonCard name={data.name} />}
      </div>
    </div>
  );
};

export default SearchPokemon;
