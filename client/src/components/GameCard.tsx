import React from 'react';

interface Game {
  id: number;
  title: string;
  genre: string;
  platform: string;
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <h3>{game.title}</h3>
      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
    </div>
  );
};

export default GameCard;