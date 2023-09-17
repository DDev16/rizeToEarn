import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Earn-to-Learn Dapp</h1>
      <p>Description and game goals go here.</p>

      {/* Buttons for explore as a guest and register */}
      <div>
        <Link to="/dashboard">
          <button>Explore as a Guest</button>
        </Link>
        <Link to="/registration">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
