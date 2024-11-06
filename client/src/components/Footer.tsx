import React from 'react';
import logo from '../assets/Placeholder Logo.png'; // Adjust the path as needed

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="CodexX Logo" style={{ width: '100px', height: 'auto' }} />
        <p>Content copyright &copy; {new Date().getFullYear()} by CodexX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
