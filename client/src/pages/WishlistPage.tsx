import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';
import { RawgGame } from '../interfaces/RawgGame';

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<RawgGame[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchWishlist = async () => {
    try {
      // Use the correct endpoint for fetching library entries
      const response = await fetch('/api/library/library-entries', {
        headers: { Authorization: `Bearer ${localStorage.getItem('id_token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch wishlist.');

      // Assuming data is an array of library entries, each with game details
      const data = await response.json();
      
      // Map library entries to RawgGame format for display
      const formattedWishlist = data.map((entry: any) => ({
        id: entry.gameDetails.id,
        title: entry.gameDetails.title,
        genre: entry.gameDetails.genre,
        platform: entry.gameDetails.platform,
        releaseDate: entry.gameDetails.releaseDate,
        imageUrl: entry.gameDetails.imageUrl,
        website: entry.gameDetails.website, // assuming game details include website
      }));

      setWishlist(formattedWishlist);
    } catch (err) {
      console.error('Error fetching wishlist:', err);
      setError('Could not load wishlist.');
    }
  };

  const onSearch = (searchQuery: string) => {
    console.log('Search for:', searchQuery);
    // Filter logic could go here based on searchQuery
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch} />
      <h1 id="wishlist-title">My Wishlist</h1>
      
      <div className="wishlist-grid">
        {/* Render games in wishlist */}
        {error ? (
          <p>{error}</p>
        ) : wishlist.length > 0 ? (
          wishlist.map((game, index) => (
            <GameCard key={index} game={game} seeMoreButton={game.website} />
          ))
        ) : (
          <p id="loading-message">Your wishlist is empty.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;