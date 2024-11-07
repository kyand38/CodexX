import React, { useEffect, useState } from 'react';
import { rawgSerivice } from '../service/rawgService';
import Logout from '../components/Logout';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';
import { RawgGame } from '../interfaces/RawgGame';

const HomePage: React.FC = () => {
  const [games, setGames] = useState<RawgGame[]>([]); // Set state type to RawgGame[]

  const onSearch = (searchQuery: string) => {
    console.log('Search for:', searchQuery);
    // Add filter logic here based on the search query
  };

  const onFilterChange = (filterValue: string) => {
    console.log('Filter changed:', filterValue);
    // Implement filtering logic based on filterValue
  };

  // Fetch popular games when the page loads
  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const fetchedGames = await rawgSerivice.getGames(15, 1); // Get 15 games for the first page
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
      <SearchBar onSearch={onSearch} /> {/* Pass onSearch function as prop */}
      <div>
        <FilterBar onFilterChange={onFilterChange} /> {/* Pass onFilterChange function as prop */}

        <div>
          {/* Render the first 15 games as GameCard components */}
          {games.length > 0 ? (
            games.map((game, index) => (
              <GameCard
                key={index}
                game={game} // Pass the entire game object
                seeMoreButton={game.website}
              />
            ))
          ) : (
            <p>Loading popular games...</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
