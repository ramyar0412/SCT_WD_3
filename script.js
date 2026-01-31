// Game state
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let gameMode = 'computer'; // 'computer' or 'player'
let scores = { X: 0, O: 0, tie: 0 };

// DOM elements
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');
const modeToggles = document.querySelectorAll('.mode-toggle');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const scoreTie = document.getElementById('scoreTie');

// Winning combinations
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Initialize game
function init() {
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetBtn.addEventListener('click', resetGame);
    modeToggles.forEach(toggle => toggle.addEventListener('click', handleModeChange));
    createParticles();
    updateScoreDisplay();
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !gameActive) return;

    makeMove(index, currentPlayer);

    if (gameActive && gameMode === 'computer' && currentPlayer === 'O') {
        setTimeout(computerMove, 500);
    }
}

// Make a move
function makeMove(index, player) {
    board[index] = player;
    const cell = cells[index];
    cell.textContent = player;
    cell.classList.add('taken', player.toLowerCase());

    const result = checkWinner();
    if (result) {
        endGame(result);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus();
    }
}

// Computer AI move
function computerMove() {
    if (!gameActive) return;

    // Try to win
    let move = findBestMove('O');
    if (move !== -1) {
        makeMove(move, 'O');
        return;
    }

    // Block player
    move = findBestMove('X');
    if (move !== -1) {
        makeMove(move, 'O');
        return;
    }

    // Take center
    if (board[4] === '') {
        makeMove(4, 'O');
        return;
    }

    // Take corner
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => board[i] === '');
    if (availableCorners.length > 0) {
        move = availableCorners[Math.floor(Math.random() * availableCorners.length)];
        makeMove(move, 'O');
        return;
    }

    // Take any available
    const available = board.map((val, idx) => val === '' ? idx : null).filter(val => val !== null);
    if (available.length > 0) {
        move = available[Math.floor(Math.random() * available.length)];
        makeMove(move, 'O');
    }
}

// Find best move for player
function findBestMove(player) {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const values = [board[a], board[b], board[c]];
        const playerCount = values.filter(v => v === player).length;
        const emptyCount = values.filter(v => v === '').length;

        if (playerCount === 2 && emptyCount === 1) {
            if (board[a] === '') return a;
            if (board[b] === '') return b;
            if (board[c] === '') return c;
        }
    }
    return -1;
}

// Check for winner
function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], pattern: pattern };
        }
    }

    if (!board.includes('')) {
        return { winner: 'tie' };
    }

    return null;
}

// End game
function endGame(result) {
    gameActive = false;

    if (result.winner === 'tie') {
        statusDisplay.textContent = "It's a Tie! 🤝";
        scores.tie++;
        animateScore(scoreTie);
    } else {
        const winnerName = gameMode === 'computer' && result.winner === 'O' ? 'Computer' : `Player ${result.winner}`;
        statusDisplay.textContent = `${winnerName} Wins! 🎉`;
        
        // Highlight winning cells
        result.pattern.forEach(index => {
            cells[index].classList.add('winner');
        });

        scores[result.winner]++;
        animateScore(result.winner === 'X' ? scoreX : scoreO);
    }

    updateScoreDisplay();
}

// Animate score increment
function animateScore(element) {
    element.classList.add('increment');
    setTimeout(() => element.classList.remove('increment'), 500);
}

// Update status display
function updateStatus() {
    if (gameMode === 'computer') {
        statusDisplay.textContent = currentPlayer === 'X' ? 'Your Turn - X' : 'Computer Thinking...';
    } else {
        statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

// Update score display
function updateScoreDisplay() {
    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
    scoreTie.textContent = scores.tie;
}

// Reset game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken', 'x', 'o', 'winner');
    });

    updateStatus();
}

// Handle mode change
function handleModeChange(e) {
    const mode = e.target.getAttribute('data-mode');
    gameMode = mode;

    modeToggles.forEach(toggle => toggle.classList.remove('active'));
    e.target.classList.add('active');

    scores = { X: 0, O: 0, tie: 0 };
    updateScoreDisplay();
    resetGame();
}

// Initialize on load
init();