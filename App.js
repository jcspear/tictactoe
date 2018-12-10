
var turn = 'X';
var clickedPlaces = [];
var playerPlaces = { X:[], O:[] };

var togglePlace = (event) => {
    
    if (!clickedPlaces.includes(event.target.id)) {
        event.target.textContent = turn;
        clickedPlaces.push(event.target.id);
        playerPlaces[turn].push(event.target.id);
        checkGameStatus(turn);
        turn = turn === 'X' ? 'O' : 'X';
        document.getElementById('current-player').textContent = turn;
    }
}

var checkGameStatus = (turn) => {
    var rows = { 1:3, 2:3, 3:3 };
    var columns = { 1:3, 2:3, 3:3 };
    var diagonal1 = ['1-1','2-2','3-3'];
    var diagonal2 = ['3-1','2-2','1-3'];
    var diagonal1Total = 3;
    var diagonal2Total = 3;
    
    playerPlaces[turn].forEach(place => {
        row = place.split('-')[0];
        col = place.split('-')[1];
        rows[row]--;
        columns[col]--;
        if (diagonal1.includes(place)) { diagonal1Total--;};
        if (diagonal2.includes(place)) { diagonal2Total--;};
        if (anyZero(rows[row], columns[col], diagonal1Total, diagonal2Total)) {
            setTimeout(() => endGame(turn), 250);
        }
    });

}

var endGame = (turn) => {
    alert(turn + ' wins!');
    clearBoard();
}

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

var anyZero = function () {
    var output = false;
    [...arguments].forEach(el => {
        if (el === 0) output = true;
    })
    return output;
}