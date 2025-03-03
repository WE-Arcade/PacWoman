import { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = ({ onToggleScoreboard }) => {
  const [activePage, setActivePage] = useState('home');
  const [scoreboardVisible, setScoreboardVisible] = useState(false);

  const handleScoreboardClick = () => {
    setScoreboardVisible(!scoreboardVisible);
    onToggleScoreboard(!scoreboardVisible);
    setActivePage(scoreboardVisible ? 'home' : 'scoreboard');
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">WE Smash</div>
      <div className="nav-links">
        <button 
          className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => setActivePage('home')}
        >
          Home
        </button>
        <button 
          className={`nav-item ${activePage === 'scoreboard' ? 'active' : ''}`}
          onClick={handleScoreboardClick}
        >
          Scoreboard
        </button>
        <button 
          className={`nav-item ${activePage === 'profile' ? 'active' : ''}`}
          onClick={() => setActivePage('profile')}
        >
          Profile
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 