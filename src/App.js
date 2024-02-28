// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './logo.png'; // Replace './logo.png' with the path to your logo file

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = 'https://cri-fluid-system.netlify.app/'; // Redirect URL
    }, 2000); // Adjust the duration of the loading animation as needed (in milliseconds)
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-container">
          <div className="logo-wrapper">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="spinner"></div> {/* Loading animation */}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
