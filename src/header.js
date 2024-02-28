// Header.js
import React from 'react';
import Logo from './vite.png'; // Import your logo

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <h1>Your Site Name</h1>
    </div>
  );
}

export default Header;
