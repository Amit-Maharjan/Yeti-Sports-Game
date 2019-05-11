function Angle() {
  let that = this;

  this.angle = 0;
  this.x = xPositionOfPenguin;
  this.y = yPositionOfPenguin + penguin.imageHeight;
  this.radius1 = 90;
  this.radius2 = 50;
  this.startAngle = (180 * Math.PI) / 180;
  this.endAngle = (270 * Math.PI) / 180;

  this.measureX;
  this.measureY;
  this.clockwiseChange = 1;

  this.drawCircle = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius1, this.startAngle, this.endAngle);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius2, this.startAngle, this.endAngle);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x - this.radius2, this.y);
    ctx.lineTo(this.x - this.radius1, this.y);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.radius2);
    ctx.lineTo(this.x, this.y - this.radius1);
    ctx.stroke();
    ctx.closePath();
  };

  this.measureX = this.x - this.radius1;

  this.drawAngleMeasure = function() {
    this.measureX += this.clockwiseChange;
    this.measureY =
      this.y -
      Math.sqrt(
        this.radius1 * this.radius1 -
          (this.measureX * this.measureX -
            2 * this.measureX * this.x +
            this.x * this.x)
      );

    if (this.measureY === this.y - this.radius1) this.clockwiseChange = -1;
    else if (this.measureY === this.y) this.clockwiseChange = 1;

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.measureX, this.measureY);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
    ctx.closePath();
  };

  this.setAngle = function() {
    that.angle = that.measureX - (that.x - that.radius1);
    angleInDegree = that.angle;
    animationNumber = 2;
    document
      .getElementById('canvas')
      .removeEventListener('click', angle.setAngle);
  };

  this.drawLine = function() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.measureX, this.measureY);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
    ctx.closePath();
  };
}
