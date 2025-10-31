import React from "react";
import PokemonList from "./components/PokemonList";
import "./App.css"; 
import SearchPokemon from "./components/SearchPokemon";

const App: React.FC = () => {

  return (
    <div>
      <div className="headerContainer" >
        <h1 className="title">Pokédex</h1>
        <SearchPokemon/>
      </div>
      <PokemonList/>
    </div>
  );
};

export default App;
