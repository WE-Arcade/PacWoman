import Phaser from "phaser";

export default class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "ball");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    // Set constant forward velocity
    this.setVelocityX(200);
    this.setBounce(0.8);
    this.setCollideWorldBounds(true);
    this.setGravityY(300);

    // Jump on click/tap
    scene.input.on("pointerdown", () => {
      this.setVelocityY(-300);
    });

    // Make sure the ball is visible
    this.setDepth(1);
  }

  update() {
    // Keep forward velocity constant
    this.setVelocityX(200);
  }
}
