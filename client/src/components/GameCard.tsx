import React from 'react';
import { RawgGame } from '../interfaces/RawgGame';
import { concatGenres, concatPlatforms, concatStores } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

interface GameCardProps {
  game: RawgGame;
  seeMoreButton: string;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { addToWishlist } = useWishlist();
  console.log('Adding to wishlist:', game);

  return (
    <div className="game-card card has-text-centered cell">
      <div className="card-image">
        <figure className="image">
          <img
            src={game.background_image}
            alt={game.name}
            className="game-card__image"
          />
        </figure>
      </div>
      <div className="card-content">
        <h3 className="game-card__title title is-4">{game.name}</h3>

        <div className="content">
          <p className="tag is-medium">Genres</p>
          <p className="game-card__genres">{concatGenres(game)}</p>

          <p className="tag is-medium">Platforms</p>
          <p className="game-card__platforms">{concatPlatforms(game)}</p>

          <p className="tag is-medium">Stores</p>
          <p className="game-card__platforms">{(game.stores) ? concatStores(game) : "No info available"}</p>

          <div className="game-card__rating tag is-medium">
            Metacritic: {(game.metacritic) ? game.metacritic : "N/A"}
          </div>
        </div>
      </div>

      <footer className="card-footer">
        <Link to={`/game/${game.id}`} className="game-card__link card-footer-item">
          See Details
        </Link>
        <button
          className="add-to-wishlist card-footer-item"
          onClick={() => addToWishlist(game)}
        >
          Add to Wishlist
        </button>
      </footer>

    </div>
  );
};

export default GameCard;
