let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds
let intervalId;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(intervalId);
                alert("Time's up! Take a break.");
                timeLeft = 5 * 60; // Switch to 5-minute break
                updateTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(intervalId);
    isRunning = false;
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateTimer();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
