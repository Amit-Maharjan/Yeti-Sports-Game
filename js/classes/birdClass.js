function Bird() {
  this.totalSpriteImage = 8;

  this.width = birdImage.width / this.totalSpriteImage / 1.5;
  this.height = birdImage.height / 1.5;

  this.x = xPositionOfPenguin - 100;
  this.y = 0;

  this.spriteWidth = 2520;
  this.spriteHeight = 315;

  this.imageWidth = this.spriteWidth / this.totalSpriteImage;
  this.imageHeight = this.spriteHeight;

  this.imageX = 0;
  this.imageY = 0;

  this.currentFrameIndex = 0;

  this.updateBirdSprite = function() {
    this.currentFrameIndex = ++this.currentFrameIndex % this.totalSpriteImage;
    this.imageX = this.currentFrameIndex * this.imageWidth;
    this.imageY = 0;
  };

  this.drawBird = function() {
    if (moveBackground === 1) this.updateBirdSprite();

    ctx.drawImage(
      birdImage,
      this.imageX,
      this.imageY,
      this.imageWidth,
      this.imageHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };
}
