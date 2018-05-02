# Pac-Man
### [Live Site](https://youknowhu.github.io/Pac-Man/)
I built a recreation of the classic Pac-Man game using only Javascript, CSS, and HTML. 

The player navigates Pac-Man through a maze to collect dots while avoiding colorful ghosts (Blinky, Pinky, Inky and Clyde). The player wins a level if they successfully collect all the dots. There are special dots called "power pellets" that give Pac-Man the temporary ability to eat the ghosts.

![Pacman Giphy](https://media.giphy.com/media/A1lE7R49IcWicpy9qJ/giphy.gif)

## Contents
[Technologies Used](#technologies-used) | [Ghost AI](#ghost-ai) | [Pacman Movement](#pacman-movement) | [Planned Work](#planned-work)

## Technologies Used
* HTML5
* CSS3
* Javscript ES6

## Ghost AI
The Pac-Man Ghost AI are built with several different strategies:
* The initial movement for all ghosts is dictated by set targets.
* Blinky and Inky will receive a random direction and will continue to move in that direction until they hit a wall, in which they will receive a new direction.
* When not vulnerable, Pinky and Clyde calculate the distance between Pac-Man and their potential moves, and will select the shortest distance. If stuck, Pinky and Clyde will also receive a random direction.

#### Code Snippet for Pinky and Clyde AI logic:
```javascript
function ghostMoveDistance(ghost) {
  let dirs = [
    {
      dir: 'UP',
      nextPos: maze[ghost.row - 1][ghost.col],
      distance: Math.sqrt(Math.pow((ghost.row - 1 - pacman.row), 2)
      + Math.pow((ghost.col - pacman.col), 2))
    },
    {
      dir: 'DOWN',
      nextPos: maze[ghost.row + 1][ghost.col],
      distance: Math.sqrt(Math.pow((ghost.row + 1 - pacman.row), 2)
      + Math.pow((ghost.col - pacman.col), 2))
    },
    {
      dir: 'LEFT',
      nextPos: maze[ghost.row][ghost.col - 1],
      distance: Math.sqrt(Math.pow((ghost.row - pacman.row), 2)
      + Math.pow((ghost.col - 1 - pacman.col), 2))
    },
    {
      dir: 'RIGHT',
      nextPos: maze[ghost.row][ghost.col + 1],
      distance: Math.sqrt(Math.pow((ghost.row- pacman.row), 2)
      + Math.pow((ghost.col + 1 - pacman.col), 2))
    }
  ]

  const shortestDir = dirs.sort((dir1, dir2) => {
    return dir1.distance - dir2.distance;
  })[0];
  return shortestDir.dir;
}

```

## Pacman Movement
Pac-Man's movements follow these paramaters: 
* Pac-Man will continue moving in the current directly until (1) he hits a wall or (2) a new direction is pressed
* Based on the next position, the following actions will take place:
  * Next Position: Dot -- Pac-Man continues moving and the chomp sound will play. 
  * Next Position: Power Pellet -- All ghosts turn blue and become vulnerable to Pac-Man for 9 seconds. If Pac-Man eats a ghost while they are vulnerable, the ghost goes back to its starting position. 
  * Next Position: Ghost -- If a ghost crosses paths with Pac-Man, Pac-Man loses a life and goes back to his starting position.
 

``` javascript 
function movePacman() {

    let pacmanNextRow;
    let pacmanNextCol;

    if (leftPressed) {
      pacmanNextRow = pacman.row;
      pacmanNextCol = pacman.col - 1;
    } else if (upPressed) {
      pacmanNextRow = pacman.row - 1;
      pacmanNextCol = pacman.col;
    } else if (rightPressed) {
      pacmanNextRow = pacman.row;
      pacmanNextCol = pacman.col + 1;
    } else if (downPressed) {
      pacmanNextRow = pacman.row + 1;
      pacmanNextCol = pacman.col;
    } else {
      return;
    }

    const nextLoc = maze[pacmanNextRow][pacmanNextCol];

    if (nextLoc != 'wall') {
      if (nextLoc == 'dot') {
        score += 10;
        const chomp = document.getElementById('chomp');
        chomp.pause();
        chomp.play();
      } else if (nextLoc == 'powerpellet') {

        const powerPellet = document.getElementById('power-pellet');
        powerPellet.play();

        ghosts.forEach(ghost => {
          ghost.vulnerable = true;
        })

        setTimeout(() => ghosts.forEach( ghost => {
          ghost.vulnerable = false;
        }), 9000);
      } else if (nextLoc.toString().slice(0, 1) === 'g') {
        maze[pacman.row][pacman.col] = 'ground';
        maze[12][9] = 'pacman';
        [pacman.row, pacman.col] = [12, 9];
        pacman.lives = pacman.lives - 1;

        const death = document.getElementById('death');
        death.play();

        return;
      } else if (nextLoc === 'blue') {
        score += 200;
        let ghost = ghosts.filter(ghost => ghost.row == pacmanNextRow && ghost.col == pacmanNextCol)[0];
        maze[ghost.row][ghost.col] = 'ground';
        [ghost.row, ghost.col] = [9, 9];
        ghost.vulnerable = false;
        maze[9][9] = ghost.abbr;

        const eatGhost = document.getElementById('eat-ghost');
        eatGhost.play();
        ghost.moves = Array.from(pinkyMoves);
      }

      maze[pacman.row][pacman.col] = 'ground';
      [pacman.row, pacman.col] = [pacmanNextRow, pacmanNextCol];
      maze[pacmanNextRow][pacmanNextCol] = 'pacman';

    }
  }

```


## Planned Work
* Additional styling for a more cohesive gameplay and aesthetic
* Add game directions on load.
* Add new levels
* Add pause, play, game over, and restart functionality.
