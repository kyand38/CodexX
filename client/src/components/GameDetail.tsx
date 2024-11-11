import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RawgDevelopmentTeam, RawgGame } from '../interfaces/RawgGame';
import { rawgService } from '../service/rawgService';
import { listDevelopmentTeam } from '../utils/helpers';

const GameDetail: React.FC = () => {
  const { id } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState<RawgGame | null>(null);
  const [devs, setDevs] = useState<RawgDevelopmentTeam>(Object);

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

    const fetchDevTeam = async () => {
      try {
        const response = await rawgService.getDevelopmentTeam(Number(id));
        setDevs(response);
      } catch (error) {
        console.error('Error fetching development team:', error);
      }
    };

    if (id) {
      fetchGameDetails();
      fetchDevTeam();
    }
  }, [id]);

  if (!game) {
    return <div>Loading...</div>; // Handle loading state
  }

  const devTeamString = listDevelopmentTeam(devs);

  return (
    <div className="game-detail">
      <section className="hero">
        <div className="hero-body">
          <p className="game-detail-title title is-2">{game.name}</p>
          <p className="game-detail-title subtitle is-4">Metacritic - {game.metacritic}</p>
        </div>
      </section>
      <div className="columns">
        <div className="column is-two-thirds">
          <img className="game-art" src={game.background_image} alt={`Artwork from ${game.name}`} />
        </div>
        <div className="column is-one-third">
          <h1 className="title">
            Development Team
          </h1>
          <ul dangerouslySetInnerHTML={{ __html: devTeamString }}></ul>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-third">
          <p className="tag">Playtime: {game.playtime} hours</p>
        </div>
        <div className="column is-one-third">
          <p className="tag">ESRB: {game.esrb_rating ? game.esrb_rating.name : "N/A"}</p>
        </div>
        <div className="column is-one-third">
          <p className="tag">Release Date: {game.released}</p>
        </div>
      </div>
      <div>
        <h1 className="title is-4">Description</h1>
        <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
      </div>
      {/* Render more details as needed */}
    </div>
  );
};

export default GameDetail;
