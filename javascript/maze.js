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

console.log(maze);

class Maze {
  constructor() {
    this.drawMaze();
    console.log(maze);
    this.drawMaze = this.drawMaze.bind(this)
  }

  drawMaze() {
    document.getElementById('pacman').innerHTML = "";
    debugger;
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

export default Maze;
