import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RawgGame } from '../interfaces/RawgGame';
import { rawgService } from '../service/rawgService';

const GameDetail: React.FC = () => {
  const { id } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState<RawgGame | null>(null);

  useEffect(() => {
    // Fetch game details using the ID
    const fetchGameDetails = async () => {
      try {
        const response = await rawgService.getGame(Number(id));
        setGame(response);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    if (id) {
      fetchGameDetails();
    }
  }, [id]);

  if (!game) {
    return <div id="loading-message">Loading game details...</div>; // Handle loading state
  }

  return (
    <div className="game-detail">
      <section className="hero">
        <div className="hero-body specific-hero-body">
          <p className="title is-4 unique-game-name">{game.name}</p>
          <p className="subtitle-metacritic">Metacritic - {game.metacritic}</p>
        </div>
      </section>
      <div className="columns">
        <div className="column is-half">
          <img src={game.background_image} alt={`Artwork from ${game.name}`} />
        </div>
        <div className="column is-half game-info">
          <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-third">
          <p>Playtime: {game.playtime}</p>
        </div>
        <div className="column is-one-third">
          <p>ESRB: {game.esrb_rating.name}</p>
        </div>
        <div className="column is-one-third">
          <p>Release Date: {game.released}</p>
        </div>
      </div>
      {/* Render more details as needed */}
    </div>
  );
};

export default GameDetail;
