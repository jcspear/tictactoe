//click on one, populate an x
//after each click, check if game is resolved
//upon resolution, display outcome
//functions: togglePlace, checkGameStatus, displayOutcome


var turn = 'X';
var calledPlaces = [];  

var togglePlace = (event) => {
    //check if should be x or o
    //display according value
    //check if has been called already
    
    if (!calledPlaces.includes(event.target)) {
        event.target.textContent = turn;
        turn = turn === 'X' ? 'O' : 'X';
        calledPlaces.push(event.target);
    }
    checkGameStatus();
}

var checkGameStatus = () => {

}

var displayOutcome = (outcome) => {

}

var test = (event) => { 
    event.target.textContent = 'test'; 
};