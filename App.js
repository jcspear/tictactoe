//Game State Global Variables
var gameState = {
    X: {
        spaces: [],
        gamesWon: 0,
        playerName: 'X'
    },
    O: {
        spaces: [],
        gamesWon: 0,
        playerName: 'O'
    },
    currentPlayer: 'X',
    gameOver: false
}

//Click handler
var togglePlace = (event) => {
    if (!(gameState.X.spaces.concat(gameState.O.spaces)).includes(event.target.id) && !gameState.gameOver) {
        event.target.textContent = gameState.currentPlayer;
        gameState[gameState.currentPlayer].spaces.push(event.target.id);
        checkGameStatus(gameState[gameState.currentPlayer].spaces);
        gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('current-player').textContent = gameState[gameState.currentPlayer].playerName;        
    }
}

//Check Game State
var checkGameStatus = (spaces) => {
    var rows = { 1:3, 2:3, 3:3 };
    var columns = { 1:3, 2:3, 3:3 };
    var diagonal1 = ['1-1','2-2','3-3'];
    var diagonal2 = ['3-1','2-2','1-3'];
    var diagonal1Total = 3;
    var diagonal2Total = 3;
    spaces.forEach(place => {
        row = place.split('-')[0];
        col = place.split('-')[1];
        rows[row]--;
        columns[col]--;
        if (diagonal1.includes(place)) { diagonal1Total--;};
        if (diagonal2.includes(place)) { diagonal2Total--;};
        if (anyZero(rows[row], columns[col], diagonal1Total, diagonal2Total)) {
            endGame(gameState[gameState.currentPlayer].playerName);
            gameState.gameOver = true;
            
        }
    });    
    if (gameState.X.spaces.concat(gameState.O.spaces).length === 9 && !gameState.gameOver) {
        gameState.gameOver = true;
        endGame();
    }
}

//Display game outcome
var endGame = (player) => {
    if (player) {
        gameState[gameState.currentPlayer].gamesWon++;
        document.getElementById(`${gameState.currentPlayer}-games`).textContent = `${gameState[gameState.currentPlayer].playerName}: ${gameState[gameState.currentPlayer].gamesWon}`;
        alert(player + ' wins!');
    } else {
        alert('Tie Game');
    }
}

//Reset all values
var clearBoard = () => {
    var places = document.getElementsByClassName('col');
    for (var i = 0; i < places.length; i++) {
        places[i].textContent = '';
    };
    gameState.X.spaces = [];
    gameState.O.spaces = [];
    gameState.gameOver = false;
}

//Helper function to check if any arguments are zero
var anyZero = function () {
    var output = false;
    [...arguments].forEach(el => {
        if (el === 0) output = true;
    })
    return output;
}

//Set Player Names
var setPlayerNames = () => {
    gameState.X.playerName = document.getElementById('x-player-name').value + ' - X';
    gameState.O.playerName = document.getElementById('o-player-name').value + ' - O';
    document.getElementById(`X-games`).textContent = `${gameState.X.playerName}: ${gameState.X.gamesWon}`;
    document.getElementById(`O-games`).textContent = `${gameState.O.playerName}: ${gameState.O.gamesWon}`;
    document.getElementById('current-player').textContent = gameState[gameState.currentPlayer].playerName;
}