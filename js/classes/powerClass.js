function Power() {
  let that = this;

  this.width = 50;
  this.height = 100;
  this.x = xPositionOfPenguin - this.width;
  this.y = yPositionOfPenguin - this.height;

  this.measureWidth = this.width;
  this.measureHeight = 0;
  this.measureX = this.x;
  this.measureY = this.y + this.height - this.measureHeight;
  this.increase = 1;

  this.smallRectWidth = this.width / 2;
  this.smallRectHeight = 10;
  this.smallRectX = this.x + this.width / 2 - this.smallRectWidth / 2;
  this.smallRectY = this.y - this.smallRectHeight;

  this.drawRectangle = function() {
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
  };

  this.drawPowerMeasure = function() {
    ctx.fillStyle = 'red';
    ctx.fillRect(
      this.measureX,
      this.measureY,
      this.measureWidth,
      this.measureHeight
    );
    if (this.measureHeight === 0) this.increase = 1;
    else if (this.measureHeight === this.height) this.increase = -1;
    this.measureHeight += this.increase;
    this.measureY = this.y + this.height - this.measureHeight;
  };

  this.drawSmallRectangle = function() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(
      this.smallRectX,
      this.smallRectY,
      this.smallRectWidth,
      this.smallRectHeight
    );
  };

  this.setPower = function() {
    speedInPower = that.measureHeight;
    animationNumber = 3;
    document
      .getElementById('canvas')
      .removeEventListener('click', power.setPower);
  };
}
