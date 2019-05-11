function Background() {
  this.x = 0;
  this.y = 0;

  this.subImageWidth = 1216;
  this.subImageHeight = 684;

  this.numberOfSubImage = 3;

  this.xSubImage = this.subImageWidth;
  this.ySubImage = 0;

  this.render = function() {
    ctx.drawImage(
      mountainImage,
      (this.xSubImage -= xChangeOfBackground),
      this.ySubImage,
      this.subImageWidth,
      this.subImageHeight,
      this.x,
      this.y,
      this.subImageWidth,
      this.subImageHeight
    );

    //Score
    if (animationNumber === 3) score += xChangeOfBackground;

    if (xChangeOfBackground > 0) {
      if (this.xSubImage <= 0) {
        this.xSubImage = this.subImageWidth;
      }
    } else if (xChangeOfBackground < 0) {
      if (this.xSubImage >= 0) {
        this.xSubImage = this.subImageWidth;
      }
    }
  };
}
