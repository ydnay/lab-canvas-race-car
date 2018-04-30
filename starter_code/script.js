window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    let canvas = document.getElementById('race-car');
    let ctx = canvas.getContext('2d');
    // Grass
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 40, 640);
    ctx.fillRect(360, 0, 40, 640);
    // Warning lines
    ctx.fillStyle = 'white';
    ctx.fillRect(50, 0, 10, 640);
    ctx.fillRect(340, 0, 10, 640);
    // Midlanes
    ctx.fillStyle = 'white';
    ctx.fillRect(197, 0, 6, 32);
    ctx.fillRect(197, 64, 6, 32);
    ctx.fillRect(197, 128, 6, 32);
    ctx.fillRect(197, 192, 6, 32);
    ctx.fillRect(197, 256, 6, 32);
    ctx.fillRect(197, 320, 6, 32);
    ctx.fillRect(197, 384, 6, 32);
    ctx.fillRect(197, 448, 6, 32);
    ctx.fillRect(197, 512, 6, 32);
    ctx.fillRect(197, 576, 6, 32);
  }
};
