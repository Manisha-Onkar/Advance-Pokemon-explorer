import { Pokemon } from '../types/Pokemon';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = async (page: number, limit: number): Promise<Pokemon[]> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}pokemon?offset=${(page - 1) * limit}&limit=${limit}`);
    const data = await response.json();
    const pokemons: Pokemon[] = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const pokemonData = await fetch(pokemon.url);
        const pokemonDetail = await pokemonData.json();
        return formatPokemonData(pokemonDetail);
      })
    );
    return pokemons;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw new Error('Failed to fetch Pokémon data.');
  }
};

export const fetchPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}pokemon/${id}`);
    const data = await response.json();
    return formatPokemonData(data);
  } catch (error) {
    console.error('Error fetching Pokémon by ID:', error);
    throw new Error('Failed to fetch Pokémon data.');
  }
};

const formatPokemonData = (data: any): Pokemon => {
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    stats: {
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    },
    abilities: data.abilities.map((ability: any) => ability.ability.name),
    moves: data.moves.slice(0, 10).map((move: any) => move.move.name),
    evolution: [], // Will be filled in with evolution data in `evolution.ts`
  };
};
