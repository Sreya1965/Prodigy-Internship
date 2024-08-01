// script.js
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

// Function to handle cell click
function handleCellClick(index) {
    if (gameOver) return;

    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        renderGameBoard();

        if (checkForWin()) {
            alert(`Player ${currentPlayer} wins!`);
            gameOver = true;
        } else if (checkForDraw()) {
            alert('It\'s a draw!');
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Function to render game board
function renderGameBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
    });
}

// Function to check for win
function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winConditions) {
        if (gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[1]] === gameBoard[condition[2]] &&
            gameBoard[condition[0]] !== '') {
            return true;
        }
    }

    return false;
}

// Function to check for draw
function checkForDraw() {
    return gameBoard.every(cell => cell !== '');
}

// Function to reset game
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    renderGameBoard();
}

// Add event listeners to cells and reset button
const cells = document.querySelectorAll('.cell');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

// Initial render of game board
renderGameBoard();