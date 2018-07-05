import { MainScene } from './scenes/main';

const config: GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MainScene]
};

const game = new Phaser.Game(config);
