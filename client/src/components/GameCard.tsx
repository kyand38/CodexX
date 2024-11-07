import React from 'react';
import { RawgGame } from '../interfaces/RawgGame';
import { concatDevelopmentTeam, concatGenres } from '../utils/helpers';

interface GameCardProps {
  game: RawgGame;
  seeMoreButton: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, seeMoreButton }) => {
  return (
    <div className="game-card">
      <img src={game.background_image} alt={game.name} className="game-card__image" />
      <h3 className="game-card__title">{game.name}</h3>

      <div className="game-card__genres">
        Genres: {concatGenres(game)}
      </div>

      <div className="game-card__platforms">
        {game.platforms.map((platform) => (
          <span key={platform.id} className="platform">
            {platform.name}
          </span>
        ))}
      </div>

      <div className="game-card__rating">Rating: {game.metacritic}</div>
      <a href={seeMoreButton} className="game-card__see-more">
        See More
      </a>
    </div>
  );
};

export default GameCard;