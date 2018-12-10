//Game State Global Variables
var turn = 'X';
var clickedPlaces = [];
var playerPlaces = { X:[], O:[] };
var gamesWon = { X: 0, O: 0 };

//Click handler
var togglePlace = (event) => {
    if (!clickedPlaces.includes(event.target.id)) {
        event.target.textContent = turn;
        clickedPlaces.push(event.target.id);
        playerPlaces[turn].push(event.target.id);
        turn = turn === 'X' ? 'O' : 'X';
        document.getElementById('current-player').textContent = turn;
        checkGameStatus();
    }
}
//Check Game State
var checkGameStatus = () => {
    for (var player in playerPlaces) {
        var rows = { 1:3, 2:3, 3:3 };
        var columns = { 1:3, 2:3, 3:3 };
        var diagonal1 = ['1-1','2-2','3-3'];
        var diagonal2 = ['3-1','2-2','1-3'];
        var diagonal1Total = 3;
        var diagonal2Total = 3;
    
        playerPlaces[player].forEach(place => {
            row = place.split('-')[0];
            col = place.split('-')[1];
            rows[row]--;
            columns[col]--;
            if (diagonal1.includes(place)) { diagonal1Total--;};
            if (diagonal2.includes(place)) { diagonal2Total--;};
            if (anyZero(rows[row], columns[col], diagonal1Total, diagonal2Total)) {
                turn = player;
                endGame(player);
                gamesWon[player]++;
                document.getElementById(`${player}-games`).textContent = `${player}: ${gamesWon[player]}`;
                return;
            }
        });
    }
    if (clickedPlaces.length === 9) {
        endGame();
    }
}
//Display game outcome
var endGame = (turn) => {
    if (turn) {
        alert(turn + ' wins!');
    } else {
        alert('Tie Game');
    }
    clearBoard();
}
//Reset all values
var clearBoard = () => {
    var places = document.getElementsByClassName('col');
    document.getElementById('current-player').textContent = 'X'
    turn = 'X';
    clickedPlaces = [];
    playerPlaces = { X:[], O:[] };
    for (var i = 0; i < places.length; i++) {
        places[i].textContent = '';
    };
}
//Helper function to check if any arguments are zero
var anyZero = function () {
    var output = false;
    [...arguments].forEach(el => {
        if (el === 0) output = true;
    })
    return output;
}