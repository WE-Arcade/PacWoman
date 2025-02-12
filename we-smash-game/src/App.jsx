import { useState } from 'react';
import GameCanvas from "./components/GameCanvas";
import Scoreboard from "./components/Scoreboard";
import Navigation from "./components/Navigation";
import './styles/App.css';

function App() {
  const [showScoreboard, setShowScoreboard] = useState(false);

  return (
    <div className="app">
      <Navigation onToggleScoreboard={setShowScoreboard} />
      <main className="main-content">
        <div className="game-section">
          <GameCanvas />
        </div>
        {showScoreboard && (
          <div className="scoreboard-section">
            <Scoreboard />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
