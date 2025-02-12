import Phaser from "phaser";
import Ball from "../objects/Ball";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    // Set world bounds
    this.physics.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, this.cameras.main.height);
    
    // Create scrolling background
    this.cameras.main.setBackgroundColor('#87CEEB'); // Sky blue
    
    // Create ball in the left portion of the screen
    this.ball = new Ball(this, 200, this.cameras.main.centerY);
    this.ball.setScale(0.5);
    
    // Make camera follow the ball
    this.cameras.main.startFollow(this.ball, true, 0.5, 0.5);
    this.cameras.main.setDeadzone(100, 0);
    
    this.obstacles = this.physics.add.group();
    
    // Spawn obstacles more frequently
    this.time.addEvent({
      delay: 800,
      callback: this.spawnObstacle,
      callbackScope: this,
      loop: true,
    });

    this.physics.add.collider(this.ball, this.obstacles, this.hitObstacle, null, this);

    // Launch UI scene
    this.scene.launch('UIScene');
    this.uiScene = this.scene.get('UIScene');

    // Handle window resize
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  spawnObstacle() {
    // Spawn obstacles on both sides of the ball
    const spawnX = this.ball.x + Phaser.Math.Between(400, 800);
    const spawnY = Phaser.Math.Between(100, this.cameras.main.height - 100);
    
    let obstacle = this.obstacles.create(spawnX, spawnY, "obstacle");
    obstacle.setScale(0.6);
    obstacle.setImmovable(true);
    obstacle.setVelocityX(0);
    obstacle.setDepth(1);

    // Randomly spawn on left or right side
    if (Math.random() > 0.5) {
      let leftObstacle = this.obstacles.create(spawnX - 200, spawnY, "obstacle");
      leftObstacle.setScale(0.6);
      leftObstacle.setImmovable(true);
      leftObstacle.setVelocityX(0);
      leftObstacle.setDepth(1);
    }
  }

  hitObstacle(ball, obstacle) {
    obstacle.destroy();
    // Add 10 points when hitting an obstacle
    this.uiScene.updateScore(10);
    
    // Dispatch event for React components
    const event = new CustomEvent('scoreUpdate', { 
      detail: { score: this.uiScene.score }
    });
    window.dispatchEvent(event);
  }

  handleResize() {
    if (this.sys.game.isRunning) {
      this.physics.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, this.cameras.main.height);
      this.cameras.main.setViewport(0, 0, window.innerWidth, window.innerHeight - 64);
    }
  }

  update() {
    // Clean up obstacles that are too far behind
    this.obstacles.children.each((obstacle) => {
      if (obstacle.x < this.ball.x - 800) {
        obstacle.destroy();
      }
    });
  }
}
