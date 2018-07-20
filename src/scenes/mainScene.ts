import 'phaser';

import phaserPng from '../assets/phaser.png';

export class MainScene extends Phaser.Scene {
  private image!: Phaser.GameObjects.Image;

  constructor() {
    super({ key: 'MainScene' });
  }

  public preload() {
    this.load.image('phaser', phaserPng);
  }

  public create() {
    this.image = this.add.image(400, 300, 'phaser');

    this.input.on('pointerdown', (event: any) => {
      this.image.x = event.x;
      this.image.y = event.y;
    });
  }
}
