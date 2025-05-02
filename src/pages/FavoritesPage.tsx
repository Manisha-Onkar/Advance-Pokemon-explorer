import React from 'react';
import useFavorites from '../hooks/useFavorites'; 
import PokemonCard from '../components/PokemonCard';
import './FavoritesPage.css';

const FavoritesPage: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="pokemon-list">
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            isFavorite={true}
            onToggleFavorite={() => toggleFavorite(pokemon)}
          />
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
