import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Platform {
  platform: {
    id: number;
    name: string;
  };
}

interface Genre {
  id: number;
  name: string;
}

interface Developer {
  id: number;
  name: string;
}

interface Publisher {
  id: number;
  name: string;
}

interface Screenshot {
  id: number;
  image: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  short_screenshots: Screenshot[];
  description_raw: string;
  platforms: Platform[];
  rating: number;
  ratings_count: number;
  genres: Genre[];
  released: string;
  developers: Developer[];
  publishers: Publisher[];
  reddit_url: string;
  reddit_name: string;
  playtime: number;
  dlcs: { id: number; name: string }[];
  suggestions_count: number;
}

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`/api/games/${id}`);
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGameDetails();
  }, [id]);

  return (
    <div className="game-detail">
      {game ? (
        <>
          {/* Main Header Section */}
          <h2>{game.name}</h2>

          <div className="game-detail__header">
            {/* Large Image */}
            <img src={game.background_image} alt={game.name} className="game-detail__image-large" />

            {/* Additional Images/Videos */}
            <div className="game-detail__media">
              {game.short_screenshots?.slice(0, 3).map((screenshot) => (
                <img key={screenshot.id} src={screenshot.image} alt="Screenshot" className="game-detail__screenshot" />
              ))}
            </div>

            {/* Main Info */}
            <div className="game-detail__info">
              <p>{game.description_raw}</p>
              <p>Platforms: {game.platforms.map((p) => p.platform.name).join(', ')}</p>
              <p>Rating: {game.rating} ({game.ratings_count} ratings)</p>
              <p>Genre: {game.genres.map((genre) => genre.name).join(', ')}</p>
              <p>Release Date: {game.released}</p>
              <p>Developer: {game.developers.map((dev) => dev.name).join(', ')}</p>
              <p>Publisher: {game.publishers.map((pub) => pub.name).join(', ')}</p>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="game-detail__additional">
            {/* Playtime */}
            <p>Average Playtime: {game.playtime} hours</p>

            {/* DLC Section */}
            {game.dlcs?.length > 0 && (
              <div className="game-detail__dlc">
                <h3>Available DLC:</h3>
                <ul>
                  {game.dlcs.map((dlc) => (
                    <li key={dlc.id}>{dlc.name}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Suggested Games */}
            {game.suggestions_count > 0 && (
              <p>Similar Games Suggested: {game.suggestions_count}</p>
            )}

            {/* Reddit and News */}
            <div className="game-detail__community">
              {game.reddit_url && (
                <p>
                  <a href={game.reddit_url} target="_blank" rel="noopener noreferrer">
                    Join the {game.reddit_name} subreddit
                  </a>
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading game details...</p>
      )}
    </div>
  );
};

export default GameDetail;