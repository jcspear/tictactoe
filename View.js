var gameState = require('./Model.js');

//View
    //render
    //endgame
    //clear board
    //setplayerNames

class View {
    constructor() {

    }

    updateNames() {
        document.getElementById(`X-games`).textContent = `${gameState.X.playerName}: ${gameState.X.gamesWon}`;
        document.getElementById(`O-games`).textContent = `${gameState.O.playerName}: ${gameState.O.gamesWon}`;
        document.getElementById('current-player').textContent = gameState[gameState.currentPlayer].playerName;
    }

    updateCurrentPlayer() {
        var currenPlayer = gameState.currentPlayer;
        document.getElementById('current-player').textContent = gameState[currentPlayer].playerName;   
    }

    clearBoard() {

    }

    gameOver(winner) {
        
    }

}