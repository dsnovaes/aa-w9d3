const { makeGrid } = require("../ttt_node/board.js");

class View {
  constructor(game, el) {
    this.setupBoard()
    //this.bindEvents()
    this.game = game
    this.el = el
  }

  setupBoard() {
    const ul = document.createElement('ul');

    const grid = document.querySelector("figure.ttt")
    ul.setAttribute('id', "grid");
    grid.appendChild(ul);
    for (let row = 0; row < 3; row++){
      for (let col = 0; col < 3; col++) {
   
        let li = document.createElement('li');
        li.setAttribute('data-position', `[${row},${col}]`);

        ul.appendChild(li);
    }}
  }
  
  bindEvents() {
    // const positions = document.getElementsByTagName("ul")
    // positions.addEventListener("click",(e) => this.handleClick(e))
    
  }

  handleClick(e) {
    //this.game.playMove()
    console.log(e)
    
  }

  makeMove(square) {

  }

}

module.exports = View;
