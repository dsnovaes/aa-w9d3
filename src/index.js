const View = require("./ttt-view.js"); // require appropriate file
const Game = require("../ttt_node/game.js");// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game()
  const grid = document.querySelector("figure.ttt")
  const view = new View(game,grid)
  window.view = view

  const positions = document.getElementById("grid")
  positions.addEventListener("click",(e) => view.handleClick(e))
  
});
