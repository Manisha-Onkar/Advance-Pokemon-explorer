import { fetchPokemonById } from './api';

// Returns a random Pokémon ID between 1 and 898 (Pokémon ID range)
export const getRandomPokemon = async (): Promise<any> => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  const pokemon = await fetchPokemonById(randomId);
  return pokemon;
};
