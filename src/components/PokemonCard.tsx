import React from 'react';
import './PokemonCard.css';
import FavoriteButton from './FavoriteButton';

interface Props {
  id: number;
  name: string;
  image: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const PokemonCard: React.FC<Props> = ({ id, name, image, isFavorite, onToggleFavorite }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h3 className="pokemon-name">{name}</h3>
      <p className="pokemon-id">ID: {id}</p> {/* Add ID display here */}
      <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
    </div>
  );
};

export default PokemonCard;
