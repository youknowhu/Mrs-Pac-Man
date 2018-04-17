let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 37:
      leftPressed = true;
      rightPressed = false;
      upPressed = false;
      downPressed = false;
      break;
    case 38:
      upPressed = true;
      leftPressed = false;
      rightPressed = false;
      downPressed = false;
      break;
    case 39:
      rightPressed = true;
      upPressed = false;
      leftPressed = false;
      downPressed = false;
      break;
    case 40:
      downPressed = true;
      upPressed = false;
      leftPressed = false;
      rightPressed = false;
      break;
    default:
      break;
  }
}

class Pacman {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  move() {
    if (leftPressed) {
      if (maze[pacman.row][pacman.col - 1] != 0) {
        maze[pacman.row][pacman.col] = 2;
        pacman.col = pacman.col - 1;
        maze[pacman.row][pacman.col] = 5;
      }
    } else if (upPressed) {
      if (maze[pacman.row - 1][pacman.col] != 0) {
        maze[pacman.row][pacman.col] = 2;
        pacman.row = pacman.row - 1;
        maze[pacman.row][pacman.col] = 5;
      }
    } else if (rightPressed) {
      if (maze[pacman.row][pacman.col + 1] != 0) {
        maze[pacman.row][pacman.col] = 2;
        pacman.col = pacman.col + 1;
        maze[pacman.row][pacman.col] = 5;
      }
    } else if (downPressed) {
      if (maze[pacman.row + 1][pacman.col] != 0) {
        maze[pacman.row][pacman.col] = 2;
        pacman.row = pacman.row + 1;
        maze[pacman.row][pacman.col] = 5;
      }
    }
  }
}


export default Pacman;
