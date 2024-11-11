import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RawgGame } from '../interfaces/RawgGame';

const GameDetail: React.FC = () => {
  const { id } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState<RawgGame | null>(null);

  useEffect(() => {
    // Fetch game details using the ID
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}`);
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    if (id) {
      fetchGameDetails();
    }
  }, [id]);

  if (!game) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="game-detail">
      <h2>{game.name}</h2>
      <img src={game.background_image} alt={game.name} />
      <p>{game.description}</p>
      {/* Render more details as needed */}
    </div>
  );
};

export default GameDetail;
