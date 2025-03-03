import { useState, useEffect } from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = () => {
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    // Listen for score updates from the game
    const handleScoreUpdate = (event) => {
      if (event.detail && event.detail.score !== undefined) {
        setCurrentScore(event.detail.score);
      }
    };

    window.addEventListener('scoreUpdate', handleScoreUpdate);
    return () => window.removeEventListener('scoreUpdate', handleScoreUpdate);
  }, []);

  return (
    <div className="scoreboard">
      <h2>Current Score</h2>
      <div className="current-score">
        {currentScore}
      </div>
    </div>
  );
};

export default Scoreboard;
