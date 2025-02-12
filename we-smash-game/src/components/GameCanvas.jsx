import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { gameConfig } from "../game/config/gameConfig";

const GameCanvas = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    if (!gameRef.current) {
      const config = {
        ...gameConfig,
        width: window.innerWidth,
        height: window.innerHeight - 64, // Subtract nav height
      };
      gameRef.current = new Phaser.Game(config);

      const handleResize = () => {
        if (gameRef.current) {
          gameRef.current.scale.resize(window.innerWidth, window.innerHeight - 64);
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return <div id="game-container"></div>;
};

export default GameCanvas; 