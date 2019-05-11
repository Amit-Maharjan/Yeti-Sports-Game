function Crane() {
  this.totalSpriteImage = 6;

  this.width = craneImage.width / this.totalSpriteImage / 1.5;
  this.height = craneImage.height / 1.5;

  this.x = canvas.width;
  this.y = yPositionOfPenguin + penguin.imageHeight - this.height;

  this.spriteWidth = 1392;
  this.spriteHeight = 247;

  this.imageWidth = this.spriteWidth / this.totalSpriteImage;
  this.imageHeight = this.spriteHeight;

  this.imageX = 0;
  this.imageY = 0;

  this.currentFrameIndex = 0;
}

Crane.prototype.updateCraneSprite = function() {
  this.currentFrameIndex = ++this.currentFrameIndex % this.totalSpriteImage;
  this.imageX = this.currentFrameIndex * this.imageWidth;
  this.imageY = 0;
};

Crane.prototype.drawCrane = function() {
  ctx.drawImage(
    craneImage,
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
