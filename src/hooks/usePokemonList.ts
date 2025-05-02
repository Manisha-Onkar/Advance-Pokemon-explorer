import { useEffect, useState } from 'react';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  isFavorite: boolean;
}

const FAVORITES_KEY = 'favorites';

const usePokemonList = (
  page: number,
  itemsPerPage: number,
  sortOption: string,
  filterOption: string
) => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [paginatedPokemons, setPaginatedPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Fetch ALL first 150 Pokémon only once
  useEffect(() => {
    const fetchAllPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const pokemonData = await fetch(pokemon.url);
            const pokemonJson = await pokemonData.json();
            return {
              id: pokemonJson.id,
              name: pokemonJson.name,
              image: pokemonJson.sprites.front_default,
              types: pokemonJson.types.map((t: any) => t.type.name),
              isFavorite: favorites.includes(pokemonJson.id),
            };
          })
        );

        setAllPokemons(pokemonDetails);
      } catch (err) {
        setError('Failed to fetch Pokémon list');
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemon();
  }, [favorites]);

  // Apply filtering, sorting, and pagination
  useEffect(() => {
    let filtered = [...allPokemons];

    // Filter
    if (filterOption) {
      filtered = filtered.filter((p) =>
        p.types.includes(filterOption.toLowerCase())
      );
    }

    // Sort
    if (sortOption === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'id-asc') {
      filtered.sort((a, b) => a.id - b.id);
    } else if (sortOption === 'id-desc') {
      filtered.sort((a, b) => b.id - a.id);
    }

    // Paginate
    const startIndex = (page - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

    setPaginatedPokemons(paginated);
  }, [allPokemons, page, itemsPerPage, sortOption, filterOption]);

  // Toggle favorite
  const toggleFavorite = (id: number) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  return { pokemons: paginatedPokemons, loading, error, toggleFavorite };
};

export default usePokemonList;
