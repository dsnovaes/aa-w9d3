const { makeGrid } = require("../ttt_node/board.js");

class View {
  constructor(game, el) {
    this.setupBoard()
  }

  setupBoard() {
    const ul = document.createElement('ul');

    const grid = document.querySelector("figure.ttt")
    grid.appendChild(ul);
    for (let idx = 1; idx < 10; idx++){
      let li = document.createElement('li');
      li.setAttribute('data-position', idx);
      ul.appendChild(li);
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
