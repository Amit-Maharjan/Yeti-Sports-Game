function collisionInRight() {
  speedOfPenguin = (20 * speedInPower) / 10;
  vxOfPenguin = speedOfPenguin;
  vyOfPenguin = speedOfPenguin;

  angleInRadianOfPenguin = (180 * Math.PI) / 180;

  collisionFlag = 1;

  collisionMusic.play();
}

function collisionInLeft() {
  speedOfPenguin = (20 * speedInPower) / 20;
  vxOfPenguin = speedOfPenguin;
  vyOfPenguin = speedOfPenguin;

  angleInRadianOfPenguin = (0 * Math.PI) / 180;

  collisionFlag = 1;

  collisionMusic.play();
}
