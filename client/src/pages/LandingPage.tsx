// src/pages/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';
import Logout from '../components/Logout';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <Logout />
      <section className="hero is-fullheight has-background-dark">
        <div className="hero-body">
          <div className="container has-text-centered">
            {/* Background Element */}
            <div className="background-element"></div>
            
            {/* Hero Content */}
            <h1 className="title has-text-white">
              Welcome to CodexX
            </h1>
            <p><strong>Welcome to CodexX!</strong></p>

<p><em>Your Ultimate Hub for Game Discovery and Collection</em></p>

<p>Step into CodexX, where gaming meets organization and discovery. Track your favorite titles, uncover hidden gems, and build a unique collection that reflects your gaming journey—all in one place!</p>

<p><strong>Personalized Profiles</strong> – Create a profile that showcases your top games, ratings, and wishlists.</p>

<p><strong>Explore & Discover</strong> – Search an expansive game library, from classics to fresh releases. Add what excites you to your wishlist or library and keep your gaming radar on point.</p>

<p><strong>Curate Your Game Codex</strong> – Rate and track every game you’ve played, building a personal codex that grows with each adventure.</p>

<p>CodexX brings your gaming world together, giving you a space to dive deeper and make every game count. Ready to level up your collection?</p>
            <Link to="/login" className="button is-link">
              Get Started
            </Link>
          </div>
        </div>
      </section> 
    </div>
  );
};

export default LandingPage;