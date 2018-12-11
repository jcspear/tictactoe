//Model
//state object

module.exports = {
    X: {
        gamesWon: 0,
        playerName: 'X'
    },
    O: {
        gamesWon: 0,
        playerName: 'O'
    },
    gameBoard: [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ],
    currentPlayer: 'X',
    gameOver: false
}

