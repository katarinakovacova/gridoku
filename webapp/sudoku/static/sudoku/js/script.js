let timerInterval;
let isRunning = false;
let totalSeconds = 0;

function updateTimerDisplay() {
const timerButton = document.getElementById('timerButton');
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
timerButton.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
timerInterval = setInterval(() => {
    totalSeconds++;
    updateTimerDisplay();
}, 1000);
}

function stopTimer() {
clearInterval(timerInterval);
}

function toggleTimer() {
const timerButton = document.getElementById('timerButton');
isRunning ? stopTimer() : startTimer();
Array.from(document.getElementsByClassName("number-cell")).forEach((el) => {
    el.style.filter = isRunning ? "blur(15px)" : null;
})
isRunning = !isRunning;
}

document.addEventListener('DOMContentLoaded', () => {
let selectedNumber = null;

// Select a number from the second number container (1-9 buttons)
document.querySelectorAll('.number-container button').forEach(button => {
    button.addEventListener('click', () => {
        selectedNumber = button.textContent;
        document.querySelectorAll('.number-container button').forEach(b => b.style.backgroundColor = '');
        button.style.backgroundColor = '#3D717E';
    });
});

// Select hint button and implement hinting functionality
document.querySelectorAll('.hint button').forEach(button => {
    button.addEventListener('click', () => {
    cells = document.querySelectorAll('.number-cell');
    for (let i = 0; i < cells.length; i++) {
        cell = cells[i];
        if (!cell.classList.contains('number-cell-origin') && !cell.classList.contains('number-cell-selector')) {
            if (cell.textContent === "") {
                cell.textContent = cell.getAttribute("data-origin");
                break;
            }
        }
    }
    });
});

// Fill the selected cell in the sudoku grid with the chosen number
document.querySelectorAll('.number-cell').forEach(cell => {
    if (!cell.classList.contains('number-cell-origin') && !cell.classList.contains('number-cell-selector')) {
        cell.addEventListener('click', () => {
            if (selectedNumber !== null) {
                originNumber = cell.getAttribute("data-origin");
                if (selectedNumber == originNumber) {
                    cell.textContent = selectedNumber;
                } else {
                    mistakeButton = document.querySelector('.mistake .menu-button');
                    mistakes = parseInt(mistakeButton.getAttribute("data-mistakes"));
                    mistakes += 1;
                    mistakeButton.setAttribute('data-mistakes', mistakes);
                    mistakeButton.textContent = `${mistakes} Mistakes`;
                }
            }
        });
    }
});
});