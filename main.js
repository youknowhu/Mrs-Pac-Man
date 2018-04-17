const Game = require("./javascript/game");
const Maze = require("./javascript/maze");

document.addEventListener('DOMContentLoaded', () => {
  const m = new Maze();
  const g = new Game(m);
  game.run();
})
