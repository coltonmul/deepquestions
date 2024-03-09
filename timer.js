// timer.js

// Function to start countdown timer
function startTimer(duration) {
    var timerDisplay = document.getElementById('timer');
    var timer = duration, minutes, seconds;

    function updateTimer() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }

    // Update timer initially
    updateTimer();

    // Update timer every second
    var timerInterval = setInterval(updateTimer, 1000);

    return timerInterval; // Return the interval ID for further use
}

// Initial call to start timer at 0:00
var timerInterval = startTimer(0);

// Event listeners for timer buttons
document.getElementById('btn1min').addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the previous timer
    timerInterval = startTimer(60);
});

document.getElementById('btn90sec').addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the previous timer
    timerInterval = startTimer(90);
});

document.getElementById('btn2min').addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the previous timer
    timerInterval = startTimer(120);
});

document.getElementById('btn3min').addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the previous timer
    timerInterval = startTimer(180);
});

document.getElementById('btn5min').addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the previous timer
    timerInterval = startTimer(300);
});

document.getElementById('btn6min').addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the previous timer
    timerInterval = startTimer(360);
});

// Event listener for custom time input and start button
document.getElementById('startButton').addEventListener('click', function() {
    var customTime = parseInt(document.getElementById('customTime').value);
    if (!isNaN(customTime) && customTime > 0) {
        clearInterval(timerInterval); // Stop the previous timer
        timerInterval = startTimer(customTime);
    }
});

// Event listener for stop button
document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(timerInterval);
});

// Event listener for reset button
document.getElementById('resetButton').addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the previous timer
    timerInterval = startTimer(0);
});
