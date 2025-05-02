import React, { createContext, useState, ReactNode } from 'react';

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface FavoritesContextType {
  favorites: Pokemon[];
  toggleFavorite: (pokemon: Pokemon) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  const toggleFavorite = (pokemon: Pokemon) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((fav) => fav.id === pokemon.id);
      return exists
        ? prevFavorites.filter((fav) => fav.id !== pokemon.id)
        : [...prevFavorites, pokemon];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
