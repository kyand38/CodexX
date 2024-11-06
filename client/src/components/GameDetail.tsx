import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Game {
  id: number;
  title: string;
  genre: string;
  platform: string;
  description: string;
}

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      const response = await fetch(`/api/games/${id}`);
      const data = await response.json();
      setGame(data);
    };

    fetchGameDetails();
  }, [id]);

  return (
    <div className="game-detail">
      {game ? (
        <>
          <h2>{game.title}</h2>
          <p>Genre: {game.genre}</p>
          <p>Platform: {game.platform}</p>
          <p>Description: {game.description}</p>
        </>
      ) : (
        <p>Loading game details...</p>
      )}
    </div>
  );
};

export default GameDetail;