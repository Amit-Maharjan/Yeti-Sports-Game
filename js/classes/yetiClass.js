function Yeti(yetiImage) {
  this.width = yetiImage.width * 2.5;
  this.height = yetiImage.height * 2.5;

  this.x = xPositionOfPenguin + 50;
  this.y = yPositionOfPenguin + penguin.imageHeight - this.height;

  this.draw = function() {
    ctx.drawImage(yetiImage, this.x, this.y, this.width, this.height);
  };
}
