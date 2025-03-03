import Phaser from "phaser";

export default class UIScene extends Phaser.Scene {
  constructor() {
    super("UIScene");
  }

  create() {
    // Initialize score
    this.score = 0;
    
    // Add score text
    this.scoreText = this.add.text(16, 16, "Score: 0", {
      fontSize: "32px",
      fill: "#fff",
      stroke: "#000",
      strokeThickness: 4
    });
    
    // Fix the score position on screen (don't move with camera)
    this.scoreText.setScrollFactor(0);
  }

  updateScore(points) {
    this.score += points;
    this.scoreText.setText(`Score: ${this.score}`);
  }
}
