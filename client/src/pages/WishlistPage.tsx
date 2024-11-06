import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';

const WishlistPage: React.FC = () => {
  const [savedGames, setSavedGames] = useState<any[]>([]);

  const onSearch = (searchQuery: string) => {
    console.log('Search for:', searchQuery);
    // Add filter logic here based on the search query
  };

  const onFilterChange = (filterValue: string) => {
    console.log('Filter changed:', filterValue);
    // Implement filtering logic based on filterValue
  };

  useEffect(() => {
    // Fetch saved games from API or local storage
    const fetchSavedGames = async () => {
      try {
        const savedGamesFromStorage = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setSavedGames(savedGamesFromStorage);  // Update state with saved games
      } catch (error) {
        console.error('Error fetching saved games:', error);
      }
    };

    fetchSavedGames();
  }, []);

  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch} /> {/* Pass onSearch function as prop */}
      <h1>Wishlist</h1>
      <FilterBar onFilterChange={onFilterChange} /> {/* Pass onFilterChange function as prop */}
      <div>
        {savedGames.length > 0 ? (
          savedGames.map((game, index) => (
            <GameCard
              key={index}
              background_image={game.background_image}
              name={game.name}
              platforms={game.platforms}
              rating={game.rating}
              seeMoreButton={game.url}
            />
          ))
        ) : (
          <p>No saved games found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
