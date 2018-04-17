import Pacman from './pacman.js'
class Game {
  constuctor(maze, pacman) {
    debugger;
    this.maze = maze;
    this.pacman = Pacman;
  }

  run() {
    while (!this.gameOver()) {
      this.pacman.move();
      this.maze.drawMaze();
    }
  }

  gameOver() {
    return false;
  }
}
