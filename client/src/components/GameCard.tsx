import React from 'react';
import { concatGenres } from '../utils/helpers';



const GameCard: React.FC<GameCardProps> = ({
  background_image,
  name,
  platforms,
  rating,
  seeMoreButton,
}: GameCardProps) => {
  return (
    <div className="game-card">

      <img src={background_image} alt={name} className="game-card__image" />
      <h3 className="game-card__title">{name}</h3>
      <div className="game-card__platforms">
        {platforms.map((platform) => (
          <span key={platform.id} className="platform">
            {platform.name}
          </span>
        ))}
      </div>
      <div className="game-card__rating">Rating: {rating}</div>
      <a href={seeMoreButton} className="game-card__see-more">
        See More
      </a>

    </div>
  );
};

export default GameCard;
