function Elephant(x) {
  this.x = x;
  this.y = yPositionOfPenguin + penguin.imageHeight - elephant.height;

  this.draw = function() {
    ctx.drawImage(elephant, this.x, this.y);
  };

  this.checkCollision = function() {
    if (
      penguin.x <= this.x + elephant.width &&
      penguin.x >= this.x + elephant.width / 2 &&
      penguin.y + penguin.imageHeight >= this.y
    ) {
      collisionInRight();
    } else if (
      penguin.x <= this.x + elephant.width / 2 &&
      penguin.x + penguin.imageWidth >= this.x &&
      penguin.y + penguin.imageHeight >= this.y
    ) {
      collisionInLeft();
    }
  };
}
