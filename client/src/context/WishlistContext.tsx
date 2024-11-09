import { RawgGame } from '../interfaces/RawgGame';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WishlistContextType {
  wishlist: RawgGame[];
  addToWishlist: (game: RawgGame) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<RawgGame[]>([]);

  const addToWishlist = (game: RawgGame) => {
    setWishlist((prevWishlist) => [...prevWishlist, game]);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
