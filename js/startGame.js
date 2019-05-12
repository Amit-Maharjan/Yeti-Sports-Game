function startGame() {
  let x = event.clientX;
  let y = event.clientY;
  if (x >= 885 && x <= 1015 && (y >= 550 && y <= 590)) {
    firstPage.style.display = 'none';
    canvas.style.display = 'block';

    mainProgram();
    firstPage.removeEventListener('click', startGame);
  }
}
