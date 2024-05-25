// It is necessary to import the readline-sync module in order to request input from the user through the input.

const readlineSync = require ('readline-sync');

// Now make a tic tac toe board of 3 x 3, now with each cell initally empty.
let grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
// console.log(grid)

// This function is used to display the grid.
// This function is used to print the current state of the board to the console.

function displayGrid() {

    // I have used this to give format or shape to the board that how my grid going to look.

console.log(`
    0   1   2                  
0 ${grid[0][0]} | ${grid[0][1]} | ${grid[0][2]},
  --+---+--
1 ${grid[1][0]} | ${grid[1][1]} | ${grid[1][2]},
  --+---+--
2 ${grid[2][0]} | ${grid[2][1]} | ${grid[2][2]},

`)

}
// console.log(displayGrid)

// This is the function used to handle to give the direction to players moves.
// This function also allow the player to enter their moves and update the grid with the latest moves.

 function playerMove(player){
    // This variable used to check that the move is valid or not.
    let validMove = false;
    // This for creating a loop until a particular move is encountered or made.
    while (!validMove) {
        // This prompt allow the player to enter the move in row.
        let row = readlineSync.question(`Player ${player}, enter your move here (0, 1, 2)`);
        // This prompt allow the palyer to enter the move in column.
        let col = readlineSync.question(`Player ${player}, enter your move here (0, 1, 2)`);
        // This is for convert ti interger.
        row = parseInt(row, 10);
        col = parseInt(col, 10);

        // This is used to check if the current move is within the bounds of the board and the cell is empty.
        if (row >= 0 && row <= 2 && col >= 0 && col <= 2 && grid[row][col] === ' ' ) {
            // This is for having the player's move mark on grid.
            grid[row][col] = player;
            // This is used ti set the validMove ti the true for exist the loop.
            validMove = true;
        } else {
            // This is used to notify the player if their move is invalid and to prompt again to enter the move.
            console.log(`Invalid move, Plaese try again.`)
        }
    }

 }
 //console.log(playerMove)

 // This function is for checking if all winning condition occured and the player won.
function checkWin(player) {
    // It is for checking any any winning occured in row.
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] == player && grid[i][1] == player && grid[i][2] == player){
            // This function is for checking for winning and return true if all the cell in a row are occupied by the same player.
            return true;
        }
    }
    // This is now checking all the winning condition occured in a column.
    for (let i = 0; i < 3; i++) {
        if(grid[0][i] == player && grid[1][i] == player && grid[2][i] == player){
            // Thid fo for returning truce if all the cells in a column are occupied by same player.
            return true;
        }
    }
    // This is for detecting all winning conditions first diaginal (Top left to Right bottom)
    if (grid[0][0] == player && grid[1][1] == player && grid[2][2] == player){
        // This return if any winning condition found.
        return true;
    }
    // This is checking winning conditions second diaginal (reight top to left bottom).
    if (grid[0][2] == player && grid[1][1] == player && grid[2][0] == player){
        return true;
    }
    // If no winning condition found then return to false.
    return false 
}
 //console.log(checkWin)

 // This is the function to check the game is draw and also check that all cells are filled and there is no winner.
 function checkDraw() {
    // This is for the row.
    for(let row of grid){
        // This is now for the each row.
        for(let cell of row) {
            if(cell === ' ') {
                // This is for if there is any empty cell in the row.
                return false;
            }
        }
    }
    // This is for returning true if all the cells are in row are filled.
    return true;
 }

// This function is for changing the player's turn.
function switchPlayer(player) {
    return player == 'X' ? '0' : 'X';
}
//console.log(switchPlayer)

// This function is for display the winner and show the which player has won the game .
function showWinner(player) {
    showWinner(`player ${player} Wins!`)
}
//console.log(showWinner)

// This is the main function of the game.
// This function will control the whole game flow of the game and checking for the win and draw.
function tictactoe() {
    // The player x
    let currentPlayer = 'X'
    // This is the variale to store the winner.
    let winner = null;

    // This is the loop for continuous the game until the game will detect and winner combination or the game will draw.
    while (!winner && !checkDraw()) {
        // This will display the current state of board.
        displayGrid();
        // This allows the player to make a move.
        playerMove(currentPlayer)

        // This is to check if the current player has won the game.
        if(checkWin(currentPlayer)){
            winner = currentPlayer
        } else {
            currentPlayer = switchPlayer(currentPlayer);

        }
    }
} 


