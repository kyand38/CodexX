import { RawgGame } from '../interfaces/RawgGame';

interface GameDetailProps {
  game: RawgGame; // Accept the 'game' prop
}

const GameDetail: React.FC<GameDetailProps> = ({ game }) => {
  return (
    <div className="game-detail">
          {/* Main Header Section */}
          <h2>{game.name}</h2>

          <div className="game-detail__header">
            {/* Large Image */}
            <img
              src={game.background_image}
              alt={game.name}
              className="game-detail__image-large"
            />

            {/* Additional Images/Videos */}
            <div className="game-detail__media">
              {game.short_screenshots?.slice(0, 3).map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={screenshot.image}
                  alt="Screenshot"
                  className="game-detail__screenshot"
                />
              ))}
            </div>

            {/* Main Info */}
            <div className="game-detail__info">
              <p>{game.description}</p>
              <p>
                Platforms:{' '}
                {game.platforms?.map((platform) => platform.platform.name).join(', ')}
              </p>
              <p>
                Rating: {game.rating} ({game.playtime} hours of playtime)
              </p>
              <p>Genres: {game.genres.map((genre) => genre.name).join(', ')}</p>
              <p>Release Date: {game.released}</p>
              <p>Publisher: {game.publishers.join(', ')}</p>
              </div>
      </div>
    </div>
  );
};

export default GameDetail;