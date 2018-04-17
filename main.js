document.addEventListener("keydown", keyDownHandler, false);

document.addEventListener('DOMContentLoaded', () => {
  const pacman = new Pacman(9, 12);
  const maze = new Maze(pacman);
  const game = new Game(maze, pacman);
  window.setInterval(() => maze.drawMaze(), 10)
})

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;


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

const maze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 'gp', 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [2, 2, 2, 2, 1, 1, 1, 0, 'gb', 'gi', 'gc', 0, 1, 1, 1, 2, 2, 2, 2],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [2, 2, 2, 0, 1, 0, 1, 1, 1, 5, 1, 1, 1, 0, 1, 0, 2, 2, 2],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

class Maze {
  constructor(pacman) {
    this.drawMaze();
    this.drawMaze = this.drawMaze.bind(this);
  }

  drawMaze() {
    document.getElementById('pacman').innerHTML = "";
    for (let row = 0; row < maze.length; row += 1) {
      for (let col = 0; col < maze[0].length; col += 1) {
        switch (maze[row][col]) {
          case 0:
            document.getElementById('pacman').innerHTML += "<div class='wall'></div>"
            break;
          case 1:
            document.getElementById('pacman').innerHTML += "<div class='dot'></div>"
            break;
          case 2:
            document.getElementById('pacman').innerHTML += "<div class='ground'></div>"
            break;
          case 'gp':
            document.getElementById('pacman').innerHTML += "<div class='pinky'></div>"
            break;
          case 'gi':
            document.getElementById('pacman').innerHTML += "<div class='inky'></div>"
            break;
          case 'gb':
            document.getElementById('pacman').innerHTML += "<div class='blinky'></div>"
            break;
          case 'gc':
            document.getElementById('pacman').innerHTML += "<div class='clyde'></div>"
            break;
          case 4:
            document.getElementById('pacman').innerHTML += "<div class='power-pellet'></div>"
            break;
          case 5:
            if (leftPressed) {
              document.getElementById('pacman').innerHTML += "<div class='pacman-left'></div>"
            } else if (downPressed) {
              document.getElementById('pacman').innerHTML += "<div class='pacman-down'></div>"
            } else if (upPressed) {
              document.getElementById('pacman').innerHTML += "<div class='pacman-up'></div>"
            } else {
              document.getElementById('pacman').innerHTML += "<div class='pacman-right'></div>"
            }
            break;
        }
      }
    }
  }
}

class Pacman {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.move = this.move.bind(this);
  }

  move() {
    debugger;
    if (leftPressed) {
      if (maze[this.row][this.col - 1] != 0) {
        maze[this.row][this.col] = 2;
        this.col = this.col - 1;
        maze[this.row][this.col] = 5;
      }
    } else if (upPressed) {
      if (maze[this.row - 1][this.col] != 0) {
        maze[this.row][this.col] = 2;
        this.row = this.row - 1;
        maze[this.row][this.col] = 5;
      }
    } else if (rightPressed) {
      if (maze[this.row][this.col + 1] != 0) {
        maze[this.row][this.col] = 2;
        this.col = this.col + 1;
        maze[this.row][this.col] = 5;
      }
    } else if (downPressed) {
      if (maze[this.row + 1][this.col] != 0) {
        maze[this.row][this.col] = 2;
        this.row = this.row + 1;
        maze[this.row][this.col] = 5;
      }
    }
  }
}

class Game {
  constructor(maze, pacman) {
    this.maze = maze;
    this.pacman = pacman;
  }

  run() {
    while (!this.gameOver()) {
      this.pacman.move();
    }
  }

  gameOver() {
    return false;
  }
}
