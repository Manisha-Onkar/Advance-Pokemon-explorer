import { Pokemon } from '../types/Pokemon';
import { fetchPokemonById } from './api';

export const getEvolutionChain = async (pokemonId: number): Promise<string[]> => {
  try {
    const speciesData = await fetchSpeciesData(pokemonId);
    const evolutionData = await fetchEvolutionChain(speciesData.evolution_chain.url);
    const evolutions: string[] = [];
    let currentEvo = evolutionData.chain;

    while (currentEvo) {
      evolutions.push(currentEvo.species.name);
      currentEvo = currentEvo.evolves_to.length > 0 ? currentEvo.evolves_to[0] : null;
    }

    return evolutions;
  } catch (error) {
    console.error('Error fetching evolution chain:', error);
    return [];
  }
};

const fetchSpeciesData = async (pokemonId: number): Promise<any> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
  return response.json();
};

const fetchEvolutionChain = async (url: string): Promise<any> => {
  const response = await fetch(url);
  return response.json();
};
