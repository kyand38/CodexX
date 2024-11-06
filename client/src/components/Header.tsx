import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo linking to Home */}
        <div className="logo">
          <Link to="/">
            <h1>CodexX</h1>
          </Link>
        </div>

        {/* Search bar in the center */}
        <div className="search-bar">
          <SearchBar />
        </div>

        {/* Right-aligned navigation buttons */}
        <div className="nav-links">
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
