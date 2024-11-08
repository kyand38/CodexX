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
            <p className="subtitle has-text-light">
              An amazing experience awaits
            </p>
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