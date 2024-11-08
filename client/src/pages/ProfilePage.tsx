import React, { useEffect, useState } from 'react';
import { rawgService } from '../service/rawgService';
import Logout from '../components/Logout';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';
import { RawgGame } from '../interfaces/RawgGame';

const ProfilePage: React.FC = () => {
  const [games, setGames] = useState<RawgGame[]>([]);

  const onSearch = (searchQuery: string) => {
    console.log('Search for:', searchQuery);
    // Add filter logic here based on the search query
  };

  // Fetch popular games when the page loads
  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const fetchedGames = await rawgService.getGames();
        setGames(fetchedGames.results);
      } catch (error) {
        console.error('Error fetching popular games:', error);
      }
    };

    fetchPopularGames();
  }, []);

  return (
    <div>
      <Header />
      <Logout/>
      {/* Pass onSearch function as prop */}
      {/* Placing the SearchBar separately below the Header */}
      <SearchBar onSearch={onSearch} /> 
      <div>
        {/* Render the first 15 games as GameCard components */}
        {games.length > 0 ? (
          games.map((game, index) => (
            <GameCard
              key={index}
              game={game} // Pass the entire game object
              seeMoreButton={game.website} // game.website for the 'See More' button
            />
          ))
        ) : (
          <p>Loading popular games...</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;