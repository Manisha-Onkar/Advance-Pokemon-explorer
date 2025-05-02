import React from 'react';
import './PokemonCompare.css';

interface Props {
  pokemon1: string;
  pokemon2: string;
  onCompare: () => void;
}

const PokemonCompare: React.FC<Props> = ({ pokemon1, pokemon2, onCompare }) => {
  return (
    <div className="compare-container">
      <div className="compare-header">
        <h2>Compare Pokémon</h2>
      </div>
      <div className="compare-content">
        <p>{pokemon1} vs {pokemon2}</p>
        <button onClick={onCompare} className="compare-btn">Compare</button>
      </div>
    </div>
  );
};

export default PokemonCompare;
