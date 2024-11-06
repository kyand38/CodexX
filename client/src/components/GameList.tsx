import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

interface Game {
  id: number;
  title: string;
  genre: string;
  platform: string;
}

const GameList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // Fetch list of games from API
    const fetchGames = async () => {
      const response = await fetch('/api/games');
      const data = await response.json();
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;