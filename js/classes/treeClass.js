function Tree(x) {
  this.width = tree.width * 1.5;
  this.height = tree.height * 1.5;
  this.x = x;
  this.y = yPositionOfPenguin + penguin.imageHeight - this.height;

  this.draw = function() {
    ctx.drawImage(tree, this.x, this.y, this.width, this.height);
  };

  this.checkCollision = function() {
    if (
      penguin.x <= this.x + this.width &&
      penguin.x >= this.x + this.width / 2 &&
      penguin.y + penguin.imageHeight >= this.y
    ) {
      collisionInRight();
    } else if (
      penguin.x <= this.x + this.width / 2 &&
      penguin.x + penguin.imageWidth >= this.x &&
      penguin.y + penguin.imageHeight >= this.y
    ) {
      collisionInLeft();
    }
  };
}
