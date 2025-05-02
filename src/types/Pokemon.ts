export interface Pokemon {
    id: number;
    name: string;
    image: string;
    stats: {
      hp: number;
      attack: number;
      defense: number;
      specialAttack: number;
      specialDefense: number;
      speed: number;
    };
    abilities: string[];
    moves: string[];
    evolution: string[];
  }
  