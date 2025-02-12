import Phaser from "phaser";
import BootScene from "../scenes/BootScene";
import MainScene from "../scenes/MainScene";
import UIScene from "../scenes/UIScene";

export const gameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: "game-container",
  scene: [BootScene, MainScene, UIScene],
  physics: {
    default: "arcade",
    arcade: { gravity: { y: 300 }, debug: false },
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: '100%',
    height: '100%'
  }
};
