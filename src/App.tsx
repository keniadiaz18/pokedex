import './App.css';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchPokemon';

 
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center">Pokédex</h1>
      <SearchBar />
      <PokemonList />
    </div>
  );
}

export default App;
