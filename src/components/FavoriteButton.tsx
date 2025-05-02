import React from 'react';
import './FavoriteButton.css';

interface Props {
  isFavorite: boolean;
  onToggle: () => void;
}

const FavoriteButton: React.FC<Props> = ({ isFavorite, onToggle }) => {
  return (
    <button
      className={`favorite-btn ${isFavorite ? 'favorite' : ''}`}
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️ Favorite' : '🤍 Not Favorite'}
    </button>
  );
};

export default FavoriteButton;
