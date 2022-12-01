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
        li.setAttribute('class', 'available');
        ul.appendChild(li);
    }}
  }
  
  bindEvents() {
    
  }

  handleClick(e) {
    if (!this.game.board.isOver()) {
      let index1 = parseInt(e.target.attributes[0].value[1])
      let index2 = parseInt(e.target.attributes[0].value[3])
      let toArray = [index1,index2]
      if (this.game.board.isEmptyPos(toArray)) {
        this.makeMove(toArray)
        e.target.innerHTML = this.game.currentPlayer;
        e.target.classList.add(this.game.currentPlayer)
        e.target.classList.remove('available')
      } else {
        alert("invalid move")
      }
    } else {
      console.log("game is over, go home")
    }
    
  }

  makeMove(square) {
    this.game.playMove(square)
    if (this.game.board.winner()) {
      const ul = document.getElementsByTagName("ul")[0]
      ul.classList.add('gameOver')
      alert('game over');
    }
  }

}

module.exports = View;
