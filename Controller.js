var gameState = require('./Model.js');
var View = require('./View.js');

//Controller
    //click handlers
    //checkGameStatus
    //anyzero

class Controller {
    constructor () {

    }

    togglePlace(event) {
        var loc = event.target.id;
        var x = event.target.id.split('-')[0];
        var y = event.target.id.split('-')[1];
        if (this.isSpaceVacant(x,y) && !gameState.gameOver) {
            event.target.textContent = gameState.currentPlayer;
            gameState.gameBoard[x][y] = gameState.currentPlayer;
            gameState.currentPlayer = this.changePlayers();
            this.checkWin(loc,gameState.currentPlayer);
            this.checkTie();
        }
    }

    changePlayers() {
        return gameState.currentPlayer === 'X' ? 'O' : 'X';
    }

    checkWin(loc,player) {
        var board = gameState.gameBoard;
        var x = loc.split('-')[0];
        var y = loc.split('-')[1];
        var rowWin = true;
        var colWin = true;
        for (var i = 0; i < board.length; i++) {
            if (board[x][i] !== player) {
                rowWin = false;
            }
            if (board[i][y] !== player) {
                colWin = false;
            }
        }
        return rowWin || colWin;
    }

    checkTie() {
        var board = gameState.gameBoard;
        board.forEach(row => {
            row.forEach(loc => {
                if (!loc) {
                    return false
                }
            });
        });
        return true;
    }

    setPlayerNames() {
        gameState.X.playerName = document.getElementById('x-player-name').value + ' - X';
        gameState.O.playerName = document.getElementById('o-player-name').value + ' - O';
    }

    isSpaceVacant(x,y) {
        return !gameState.gameBoard[x][y];
    }

}