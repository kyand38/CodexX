import React, { useEffect, useState } from 'react';
// import { rawgService } from '../service/rawgService';
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
      const response = await fetch('/api/wishlist', {
        headers: { Authorization: `Bearer ${localStorage.getItem('id_token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch wishlist.');
      const data = await response.json();
      setWishlist(data);
    } catch (err) {
      console.error('Error fetching wishlist:', err);
      setError('Could not load wishlist.');
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div>
      <Header />
      <SearchBar onSearch={(query) => console.log('Search for:', query)} />
      <h1>My Wishlist</h1>
      <div>
        {error ? (
          <p>{error}</p>
        ) : wishlist.length > 0 ? (
          wishlist.map((game, index) => (
            <GameCard key={index} game={game} seeMoreButton={game.website} />
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