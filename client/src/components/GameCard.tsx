import React from 'react';
import { RawgGame } from '../interfaces/RawgGame';
import { concatGenres } from '../utils/helpers';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: RawgGame;
  seeMoreButton: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, seeMoreButton }) => {
  return (
    <div className="game-card">
      {/* Make the entire GameCard clickable by wrapping it with a Link */}
      <Link to={`/game/${game.id}`} className="game-card__link">
        <img src={game.background_image} alt={game.name} className="game-card__image" />
        <h3 className="game-card__title">{game.name}</h3>

        <div className="game-card__genres">
          Genres: {concatGenres(game)}
        </div>

        <div className="game-card__platforms">
          {game.platforms?.map((platform) => (
            <span key={platform.platform.id} className="platform">
              {platform.platform.name}
            </span>
          ))}
        </div>

        <div className="game-card__rating">Rating: {game.metacritic}</div>
      </Link>

      {/* "See More" button that leads to the same GameDetails page */}
      <a href={seeMoreButton} className="game-card__see-more">
        See More
      </a>
    </div>
  );
};

export default GameCard;