function Giraffe(x) {
  this.width = giraffe.width / 1.5;
  this.height = giraffe.height / 1.5;
  this.x = x;
  this.y = yPositionOfPenguin + penguin.imageHeight - this.height;

  this.legHeight = 205;
  this.tailWidth = 100;

  this.draw = function() {
    ctx.drawImage(giraffe, this.x, this.y, this.width, this.height);
  };

  this.checkCollision = function() {
    if (
      penguin.x <= this.x + this.width &&
      penguin.x >= this.x + this.width / 2 &&
      penguin.y + penguin.imageHeight >= this.y &&
      penguin.y <= this.y + this.height - this.legHeight
    ) {
      collisionInRight();
    } else if (
      penguin.x <= this.x + this.width / 2 &&
      penguin.x + penguin.imageWidth >= this.x + this.tailWidth &&
      penguin.y + penguin.imageHeight >= this.y &&
      penguin.y <= this.y + this.height - this.legHeight
    ) {
      collisionInLeft();
    }
  };
}
