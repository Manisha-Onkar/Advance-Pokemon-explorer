


import React, { useState } from 'react';
import usePokemonList from '../hooks/usePokemonList';
import usePagination from '../hooks/usePagination';
import PokemonCard from '../components/PokemonCard';
import SortFilterControls from '../components/SortFilterControls';
import Pagination from '../components/Pagination';
import useFavorites from '../hooks/useFavorites'; 
import './HomePage.css';

const HomePage: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState('id');
  const [filterOption, setFilterOption] = useState<string>('');

  const { currentPage, totalPages, goToPage } = usePagination({
    totalItems: 1000,
    itemsPerPage,
  });

  const { pokemons, loading, error } = usePokemonList(currentPage, itemsPerPage, sortOption, filterOption);

  const { favorites, toggleFavorite } = useFavorites(); 

  // Check if the Pokémon is in the favorites
  const isFavorite = (id: number) => favorites.some((pokemon) => pokemon.id === id);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      goToPage(page);
    }
  };

  // Handle sorting change
  const handleSortChange = (sortOption: string) => {
    setSortOption(sortOption);
  };

  // Handle filtering change
  const handleFilterChange = (filterOption: string) => {
    setFilterOption(filterOption);
  };

  return (
    <div className="home-page">
      <h1>Pokémon Explorer</h1>
      <SortFilterControls 
        onSortChange={handleSortChange} 
        onFilterChange={handleFilterChange} 
        setItemsPerPage={setItemsPerPage} 
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            isFavorite={isFavorite(pokemon.id)} 
            onToggleFavorite={() => toggleFavorite(pokemon)} 
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
