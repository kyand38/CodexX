import React from 'react';
import { concatGenres } from '../utils/helpers';

interface RawgGame {
  id: number;
  name: string;
  description: string;
  metacritic: number;
  released: string;
  background_image: string;
  website: string;
  playtime: number;
  platforms: string[];
  developers: string[];
  genres: {Array<object>;}
  publishers: string[];
  esrb_rating: string;
}

interface GameCardProp {
  game: RawgGame;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <h3>{game.name}</h3>
      <p>Genre: {concatGenres(game)}</p>
      <p>Platform: {game.platforms}</p>
    </div>
  );
};

export default GameCard;