import { useEffect, useState } from 'react';

interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  stats: { [key: string]: number };
  abilities: string[];
  moves: string[];
  evolution: string[];
}

const usePokemonDetail = (pokemonId: number) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        const evolutions = await fetchEvolution(data.species.url);

        setPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          stats: data.stats.reduce((acc: any, stat: any) => {
            acc[stat.stat.name] = stat.base_stat;
            return acc;
          }, {}),
          abilities: data.abilities.map((ability: any) => ability.ability.name),
          moves: data.moves.slice(0, 10).map((move: any) => move.move.name),
          evolution: evolutions,
        });
      } catch (err) {
        setError('Failed to fetch Pokémon details');
      } finally {
        setLoading(false);
      }
    };

    const fetchEvolution = async (speciesUrl: string) => {
      const response = await fetch(speciesUrl);
      const data = await response.json();
      const evolutionChainUrl = data.evolution_chain.url;
      const evolutionResponse = await fetch(evolutionChainUrl);
      const evolutionData = await evolutionResponse.json();
      return parseEvolutionChain(evolutionData.chain);
    };

    const parseEvolutionChain = (chain: any) => {
      let evolutions = [];
      let current = chain;
      while (current) {
        evolutions.push(current.species.name);
        current = current.evolves_to[0];
      }
      return evolutions;
    };

    fetchPokemonDetail();
  }, [pokemonId]);

  return { pokemon, loading, error };
};

export default usePokemonDetail;
