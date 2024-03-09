// timer.js

// Function to start countdown timer
function startTimer(duration) {
    var timerDisplay = document.getElementById('timer');
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        // Check if the timer has reached 0:59 seconds
        if (minutes === 0 && seconds === 59) {
            timerDisplay.style.color = 'yellow';
        }

        // Check if the timer has reached 0:29 seconds
        if (minutes === 0 && seconds === 29) {
            timerDisplay.style.color = 'red';
        }

        // Check if the timer has reached 0:00 seconds
        if (minutes === 0 && seconds === 0) {
            // Keep flashing 0:00
            setInterval(() => {
                timerDisplay.style.visibility = (timerDisplay.style.visibility === 'hidden') ? 'visible' : 'hidden';
            }, 500);
        }

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Event listeners for timer buttons
document.getElementById('btn1min').addEventListener('click', function() {
    startTimer(60);
});

document.getElementById('btn90sec').addEventListener('click', function() {
    startTimer(90);
});

document.getElementById('btn2min').addEventListener('click', function() {
    startTimer(120);
});

document.getElementById('btn3min').addEventListener('click', function() {
    startTimer(180);
});

document.getElementById('btn5min').addEventListener('click', function() {
    startTimer(300);
});

document.getElementById('btn6min').addEventListener('click', function() {
    startTimer(360);
});
