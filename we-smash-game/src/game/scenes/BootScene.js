import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.image("ball", "/assets/ball.png");
    this.load.image("obstacle", "/assets/obstacle.png");
  }

  create() {
    this.scene.start("MainScene");
  }
}
