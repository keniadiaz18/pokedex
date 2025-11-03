interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListResponse {
    results: Pokemon[];
}

interface PokemonDataResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites
}

interface Sprites  {
  front_default: string;
}

interface PokemonModal {
  selectedPokemon: string;
  onClose: () => void;
}