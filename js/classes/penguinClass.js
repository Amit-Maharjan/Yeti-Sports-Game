function Penguin(x, y) {
  this.x = x;
  this.y = y;

  this.spriteWidth = 1380;
  this.spriteHeight = 115;

  this.totalSpriteImage = 12;

  this.imageWidth = this.spriteWidth / this.totalSpriteImage;
  this.imageHeight = this.spriteHeight;

  this.imageX = 0;
  this.imageY = 0;

  this.currentFrameIndex = 0;
}

Penguin.prototype.updateSprite = function() {
  this.currentFrameIndex = ++this.currentFrameIndex % this.totalSpriteImage;
  this.imageX = this.currentFrameIndex * this.imageWidth;
  this.imageY = 0;
  ctx.clearRect(this.x, this.y, this.imageWidth, this.imageHeight);
};

Penguin.prototype.drawPenguin = function() {
  if (moveBackground === 1) this.updateSprite();
  else if (moveBackground === 0) xChangeOfBackground = 0;

  background.render();

  ctx.drawImage(
    penguinImage,
    this.imageX,
    this.imageY,
    this.imageWidth,
    this.imageHeight,
    this.x,
    this.y,
    this.imageWidth,
    this.imageHeight
  );
};

Penguin.prototype.projectilePenguin = function() {
  //Calculating Center of Gravity (CG)
  let xCenterOfGravity = this.x + this.imageWidth / 2;
  let yCenterOfGravity = this.y + this.imageHeight / 2;

  let speed = speedInPower;
  let angle = (angleInDegree * Math.PI) / 180;

  let vx = speed * Math.cos(angle);
  let vy = speed * Math.sin(angle);

  let mass = 1;
  let gravitationalField = 1;

  let dt = 1;
  let t = 0;

  let gravitationalForce = mass * gravitationalField;

  let force = gravitationalForce;

  let actualMaximunHeight =
    ((speed * speed * Math.sin(angle) * Math.sin(angle)) / 2) * (force / mass); //According to formula

  let maximunHeight = yPositionOfPenguin - actualMaximunHeight * 8; //Adjustment for our screen

  if (this.y < maximunHeight) flagForNegativeGravity = 0;

  if (this.y <= yPositionOfPenguin) {
    //Update velocity
    vx = vx; //Horizontal Velocity is always constant
    vy = vy + (force / mass) * dt;

    //Update Position
    xCenterOfGravity = xCenterOfGravity - vx * dt;
    if (flagForNegativeGravity === 1)
      yCenterOfGravity = yCenterOfGravity - vy * dt;
    else if (flagForNegativeGravity === 0)
      yCenterOfGravity = yCenterOfGravity + vy * dt;

    xChangeOfBackground = vx * dt; // For x change in background

    //Update Time
    t = t + dt;

    //Calculating drawable point
    //this.x = xCenterOfGravity - this.imageWidth / 2; // X is kept always same in our animation
    this.y = yCenterOfGravity - this.imageHeight / 2;

    moveBackground = 1;
  } else moveBackground = 0;

  //Bouncing Effect and Friction of Penguin
  if (this.y > yPositionOfPenguin && t > 0) {
    if (speedInPower >= 5) {
      //Bounce
      speedInPower = speedInPower / 2;
      moveBackground = 1;
      flagForNegativeGravity = 1;
      this.y = yPositionOfPenguin;
    } else if (speedInPower > 1 && speedInPower < 5) {
      //Friction
      speedInPower -= 1;
      moveBackground = 1;
      flagForNegativeGravity = 1;
      this.y = yPositionOfPenguin;
    }
  }
};

Penguin.prototype.projectilePenguinAfterCollision = function() {
  //Calculating Center of Gravity (CG)
  let xCenterOfGravity = this.x + this.imageWidth / 2;
  let yCenterOfGravity = this.y + this.imageHeight / 2;

  vxOfPenguin = vxOfPenguin * Math.cos(angleInRadianOfPenguin) + 0.05;
  vyOfPenguin = vyOfPenguin * Math.sin(angleInRadianOfPenguin);

  let mass = 1;
  let gravitationalField = 10;

  let dt = 1;
  let t = 0;

  let gravitationalForce = -mass * gravitationalField;

  let force = gravitationalForce;

  if (this.y <= yPositionOfPenguin) {
    //Update velocity
    vxOfPenguin = vxOfPenguin; //Horizontal Velocity is always constant
    vyOfPenguin = vyOfPenguin + (force / mass) * dt;

    angleInRadianOfPenguin = Math.atan(vyOfPenguin / vxOfPenguin);

    //Update Position
    xCenterOfGravity = xCenterOfGravity - vxOfPenguin * dt;
    yCenterOfGravity = yCenterOfGravity - vyOfPenguin * dt;

    xChangeOfBackground = (vxOfPenguin * dt) / 3; // For x change in background

    //Update Time
    t = t + dt;

    //Calculating drawable point
    //this.x = xCenterOfGravity - this.imageWidth / 2; // X is kept always same in our animation
    this.y = yCenterOfGravity - this.imageHeight / 2;

    moveBackground = 1;
  } else moveBackground = 0;

  //Bouncing Effect and Friction of Penguin
  if (this.y > yPositionOfPenguin && t > 0) {
    if (speedOfPenguin >= 20) {
      //Bounce
      speedOfPenguin = speedOfPenguin / 5;
      vxOfPenguin = speedOfPenguin;
      vyOfPenguin = speedOfPenguin;
      angleInRadianOfPenguin = (45 * Math.PI) / 180;
      moveBackground = 1;
      this.y = yPositionOfPenguin;
    } else if (speedOfPenguin > 10 && speedOfPenguin < 20) {
      //Friction
      speedOfPenguin -= 1;
      vxOfPenguin = speedOfPenguin;
      vyOfPenguin = speedOfPenguin;
      angleInRadianOfPenguin = (45 * Math.PI) / 180;
      moveBackground = 1;
      this.y = yPositionOfPenguin;
    }
  }
};

Penguin.prototype.dropPenguin = function() {
  angleInRadianOfPenguin = 0;
  speedOfPenguin = 40;
  speedInPower = 30;
  vxOfPenguin = speedOfPenguin;
  vyOfPenguin = speedOfPenguin;
  collisionFlag = 1;
  disappearBird = 1;
};
