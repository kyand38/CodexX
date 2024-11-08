import React from 'react';
import { RawgGame } from '../interfaces/RawgGame';
import { concatGenres, concatPlatforms, concatStores } from '../utils/helpers';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: RawgGame;
  seeMoreButton: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, seeMoreButton }) => {
  return (
    <div className="game-card card has-text-centered cell">

      {/* Make the entire GameCard clickable by wrapping it with a Link */}

      <div className="card-image">
        <figure className="image">
          <img src={game.background_image}
            alt={game.name}
            className="game-card__image" />
        </figure>
        <div className="card-content">
          <h3 className="game-card__title title is-4">{game.name}</h3>
        </div>

        <div className="content">
          <p className="tag is-medium">Genres</p>
          <p className="game-card__genres">
            {concatGenres(game)}
          </p>

          <p className="tag is-medium">Platforms</p>
          <p className="game-card__platforms">
            {concatPlatforms(game)}
          </p>

          <p className="tag is-medium">Stores</p>
          <p className="game-card__platforms">
            {concatStores(game)}
          </p>

          <div className="game-card__rating tag is-medium">Metacritic: {game.metacritic}</div>

          <footer className="card-footer">
            <Link to={`/game/${game.id}`} className="game-card__link card-footer-item">See Details</Link>
            {/* TODO: Fix add to wishlist link */}
            <Link to={`/`} className="card-footer-item">Add to wishlist</Link>
          </footer>

        </div>
      </div>
    </div >
  );
};

export default GameCard;