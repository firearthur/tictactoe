const resetBoard = () => {


  return new Array( 
    [null, null, null],
    [null, null, null],
    [null, null, null]
    );
};


let board = resetBoard();

let turn = 'x';


const play = (row, col) => {
  board[row][col] = turn;
  console.log(displayBoard(board));
  // check if there's a winner
  if(
    checkForVerticalWinner(turn, board) || 
    checkForHorizontalWinner(turn, board) || 
    checkForDiagonalWinner(turn, board)
  ){
    announceWinner(turn);
    resetBoard(board);
    return;
  }

  // if not continue playing
  if(turn === 'x'){
    turn = 'o'
  } else if (turn === 'o') {
    turn = 'x';
  }

  displayTurn();
};

const displayBoard = (board) => {
  return `
    ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
    -------------------
    ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
    -------------------
    ${board[2][0]} | ${board[2][1]} | ${board[2][2]}
    `;
};

const checkForHorizontalWinner = (player, board) => {
  let playerCounter = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      // if player exists there then increment the counter
      if (board[row][col] === player) {
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


const checkForVerticalWinner = (player, board) => {
  let playerCounter = 0;
  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board.length; row++) {
      // if player exists there then increment the counter
      if (board[row][col] === player) {
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

const checkForDiagonalWinner = (player, board) => {
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
  return false; 
};

const announceWinner = (player) => {
  console.log(`${player} is a winner!`);
};

const displayTurn = () => {
  console.log(`${turn} turn's now!`);
};

const runGame = () => {
  console.log(displayBoard(board));
  displayTurn();
};

runGame();