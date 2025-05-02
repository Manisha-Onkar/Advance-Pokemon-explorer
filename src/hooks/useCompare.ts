import { useState } from 'react';

interface PokemonStats {
  [key: string]: number;
}

const useCompare = () => {
  const [pokemon1Stats, setPokemon1Stats] = useState<PokemonStats | null>(null);
  const [pokemon2Stats, setPokemon2Stats] = useState<PokemonStats | null>(null);

  const compareStats = (pokemon1: PokemonStats, pokemon2: PokemonStats) => {
    setPokemon1Stats(pokemon1);
    setPokemon2Stats(pokemon2);
  };

  return { pokemon1Stats, pokemon2Stats, compareStats };
};

export default useCompare;
