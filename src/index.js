class Board {
  constructor(){
    this.deck = new Array( 
        [null, null, null],
        [null, null, null],
        [null, null, null]
      );
  }
}

class Game {
  constructor(){
    this.board = new Board().deck;
    this.winner = null;
    this.turn = 'x';

    this.displayBoard();
    this.displayTurn();
  }

  checkForVerticalWinner (player) {
    let playerCounter = 0;
    for (let col = 0; col < this.board.length; col++) {
      for (let row = 0; row < this.board.length; row++) {
        // if player exists there then increment the counter
        if (this.board[row][col] === player) {
          playerCounter++;
        }
        // if the counter reaches 3 it means this player won
        if (playerCounter === 3){
          return true;
        }
      }
      // reset cause didnt get 3 at a time
      playerCounter = 0;
    }
    return false; 
  };

  checkForHorizontalWinner (player) {
    let playerCounter = 0;
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board.length; col++) {
        // if player exists there then increment the counter
        if (this.board[row][col] === player) {
          playerCounter++;
        }
        // if the counter reaches 3 it means this player won
        if (playerCounter === 3){
          return true;
        }
      }
      // reset cause didnt get 3 at a time    
      playerCounter = 0;
    }
  
    return false; 
  };
  
  
  checkForDiagonalWinner (player) {
    if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) {
      return true;
    }
    if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player) {
      return true;
    }
    return false; 
  };
  
  switchTurn() {
    if(this.turn === 'x'){
      this.turn = 'o'
    } else if (this.turn === 'o') {
      this.turn = 'x';
    }
  }
  
  play(row, col) {
    this.board[row][col] = this.turn;
  
    // check if there's a winner
    if(
      this.checkForVerticalWinner(this.turn, this.board) || 
      this.checkForHorizontalWinner(this.turn, this.board) || 
      this.checkForDiagonalWinner(this.turn, this.board)
    ){
      this.announceWinner();
      return;
    }
  
    // if not continue playing
    this.switchTurn();
    this.displayBoard();
    this.displayTurn();
  }

  announceWinner() {
    console.log(`${this.turn} is a winner!`);
  };
  
  displayTurn() {
    console.log(`${this.turn} turn's now!`);
  };


  displayBoard () {
    console.log( `
      ${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]}
      -------------------
      ${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]}
      -------------------
      ${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]}
      `);
  };

};

// const myGame = new Game();
