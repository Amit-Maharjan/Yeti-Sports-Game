let xPositionOfGameOver = canvas.width + crane.width;
let xDecrementOfGameOver = 0;

function displayScore() {
  ctx.font = '30px arial';
  ctx.fillStyle = 'White';
  ctx.fillText('score : ' + Math.ceil(score / 100), 10, canvas.height - 20);
}

function displayLives() {
  ctx.font = '30px arial';
  ctx.fillStyle = 'Black';
  ctx.fillText('Lives : ' + lives, 10, 50);
}

function displayGameOver() {
  ctx.beginPath();
  ctx.moveTo(
    crane.x + crane.width - 50,
    yPositionOfPenguin + penguin.imageHeight - 60
  );
  ctx.lineTo(
    xPositionOfGameOver - xDecrementOfGameOver + 100,
    yPositionOfPenguin + penguin.imageHeight - 60
  );
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.closePath();

  ctx.fillStyle = 'grey';
  ctx.fillRect(
    xPositionOfGameOver - xDecrementOfGameOver + 100,
    yPositionOfPenguin + penguin.imageHeight - 120,
    155,
    100
  );

  ctx.font = '30px arial';
  ctx.fillStyle = 'Red';
  ctx.fillText(
    'Game Over',
    xPositionOfGameOver - xDecrementOfGameOver + 100,
    yPositionOfPenguin + penguin.imageHeight - 90
  );

  ctx.fillStyle = 'Black';
  ctx.fillText(
    'Score : ' + Math.ceil(score / 100),
    xPositionOfGameOver - xDecrementOfGameOver + 100,
    yPositionOfPenguin + penguin.imageHeight - 60
  );

  ctx.fillStyle = 'blue';
  ctx.fillText(
    'Play Again',
    xPositionOfGameOver - xDecrementOfGameOver + 100,
    yPositionOfPenguin + penguin.imageHeight - 30
  );
}
