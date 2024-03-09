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
