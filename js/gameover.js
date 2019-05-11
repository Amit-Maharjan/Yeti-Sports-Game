function gameOver() {
  if (crane.x >= 300) {
    crane.x -= 5;
    xDecrementOfGameOver += 5;
    crane.updateCraneSprite();
  }

  crane.drawCrane();
  displayGameOver();

  if (crane.x < 300) {
    document.getElementById('canvas').addEventListener('click', reload);
  }
}

function reload() {
  let x = event.clientX;
  let y = event.clientY;
  if (x >= 560 && x <= 715 && (y >= 545 && y <= 590)) {
    location.reload();
  }

  document.getElementById('canvas').removeEventListener('click', reload);
}
