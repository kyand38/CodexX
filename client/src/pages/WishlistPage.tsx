import React, { useEffect, useState } from 'react';
import { rawgService } from '../service/rawgService';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';
import { RawgGame } from '../interfaces/RawgGame';

import { useWishlist } from '../context/WishlistContext';

const WishlistPage: React.FC = () => {
  const { wishlist, addToWishlist } = useWishlist(); // Get wishlist and addToWishlist

  const onSearch = (searchQuery: string) => {
    console.log('Search for:', searchQuery);
    // Add filter logic here based on the search query
  };

  // Fetch popular games when the page loads
  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const fetchedGames = await rawgService.getGames(); // Get 15 games for the first page
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
      <SearchBar onSearch={onSearch} />
      <h1>My Wishlist</h1>
      <div>
        {/* Render games in wishlist */}
        {wishlist.length > 0 ? (
          wishlist.map((game, index) => (
            <GameCard
              key={index}
              game={game}
              seeMoreButton={game.website} // game.website for the 'See More' button
            />
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;