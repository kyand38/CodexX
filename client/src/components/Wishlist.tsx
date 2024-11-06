import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

interface Game {
  id: number;
  title: string;
  genre: string;
  platform: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Game[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await fetch('/api/wishlist');
      const data = await response.json();
      setWishlist(data);
    };

    fetchWishlist();
  }, []);

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlist.length ? (
        wishlist.map((game) => <GameCard key={game.id} game={game} />)
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;