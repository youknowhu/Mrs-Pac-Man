# Pac-Man
### [Live Site](https://youknowhu.github.io/Pac-Man/)
A recreation of the classic Pac-Man game using only Javascript, CSS, and HTML


The player navigates Pac-Man through a maze to collect dots while avoiding colorful ghosts (Blinky, Pinky, Inky and Clyde). The player wins a level if they successfully collect all the dots. There are special dots called "power pellets" that give Pac-Man the temporary ability to eat the ghosts.

![Pacman Giphy](https://media.giphy.com/media/A1lE7R49IcWicpy9qJ/giphy.gif)

## Contents
[Technologies Used](#technologies-used) | [Ghost AI](#ghost-ai) | [Planned Work](#planned-work)

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


## Planned Work
* Additional styling for a more cohesive gameplay and aesthetic
* Add new levels
* Add pause, play, game over, and restart functionality.
