function Snake(x) {
  this.totalSpriteImage = 6;

  this.width = snake.width / this.totalSpriteImage / 1.5;
  this.height = snake.height / 1.5;

  this.x = x;
  this.y = yPositionOfPenguin + penguin.imageHeight - this.height;

  this.spriteWidth = 2220;
  this.spriteHeight = 370;

  this.imageWidth = this.spriteWidth / this.totalSpriteImage;
  this.imageHeight = this.spriteHeight;

  this.imageX = 0;
  this.imageY = 0;

  this.currentFrameIndex = 0;

  this.topOffset = 175;
  this.rightOffset = 50;
  this.leftOffset = 90;
}

Snake.prototype.updateSnakeSprite = function() {
  this.currentFrameIndex = ++this.currentFrameIndex % this.totalSpriteImage;
  this.imageX = this.currentFrameIndex * this.imageWidth;
  this.imageY = 0;
};

Snake.prototype.draw = function() {
  if (this.currentFrameIndex === 5) moveSnake = 0;

  if (moveSnake === 1) this.updateSnakeSprite();

  ctx.drawImage(
    snake,
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

Snake.prototype.checkCollision = function() {
  if (
    penguin.x <= this.x + this.width - this.rightOffset &&
    penguin.x + penguin.imageWidth >= this.x + this.leftOffset &&
    penguin.y + penguin.imageHeight >= this.y + this.topOffset
  ) {
    //Collision
    if (xChangeOfBackground > 0) angleInDegree = 45;
    else if (xChangeOfBackground < 0) angleInDegree = 135;

    speedInPower = 50;
    flagForNegativeGravity = 1;
    collisionFlag = 0;
    moveSnake = 1;
  }
};
