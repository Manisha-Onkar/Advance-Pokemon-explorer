import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';
import './PokemonDetailPage.css';

const PokemonDetailPage: React.FC = () => {
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const { pokemon, loading, error } = usePokemonDetail(Number(pokemonId));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="pokemon-detail-page">
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.image} alt={pokemon?.name} />
      <div className="pokemon-stats">
        <h2>Stats</h2>
        <ul>
          {Object.entries(pokemon?.stats || {}).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="pokemon-abilities">
        <h2>Abilities</h2>
        <ul>
          {pokemon?.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>
      <div className="pokemon-moves">
        <h2>Moves</h2>
        <ul>
          {pokemon?.moves.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ul>
      </div>
      <div className="pokemon-evolution">
        <h2>Evolution Chain</h2>
        <ul>
          {pokemon?.evolution.map((evolution, index) => (
            <li key={index}>{evolution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
