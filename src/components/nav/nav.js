import React, { useState } from "react";
import { Link } from "react-router-dom";
import rizeLogo from "../../components/assets/rize-logo.png";
import "./nav.css"; // Make sure to adjust the path to your CSS file

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={rizeLogo} alt="Rize Logo" className="logo" />
      <span className="logo-text">To Earn</span>

      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <li>
          <Link to="/home">Home</Link>
        </li>
        
        <li>
          <Link to="/registration">Registration and Sign In</Link>
        </li>
        <li>
          <Link to="/dashboard">User Dashboard</Link>
          </li>
          <li>
            <Link to="/content">Podcast & Learning Module Selection</Link>
          </li>
          <li>
            <Link to="/quizzes">Quizzes & Challenges</Link>
          </li>
          <li>
            <Link to="/badge">Badge System</Link>
          </li>
          <li>
            <Link to="/community">Community & Discussion Boards</Link>
          </li>
          <li>
            <Link to="/affiliate">Affiliate & Referral System</Link>
          </li>
          <li>
            <Link to="/leaderboards">Monthly Leaderboards & Rewards</Link>
          </li>
          <li>
            <Link to="/personal">Personal Growth</Link>
          </li>
          <li>
            <Link to="/events">Special Events & Exclusive Content</Link>
          </li>
          <li>
            <Link to="/redeem">Redeem & Shop</Link>
          </li>
        </ul>
    
    </div>
  );
};

export default Nav;
