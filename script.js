const randomQuestionDiv = document.getElementById('randomQuestion');
const phrasesDiv = document.getElementById('phrases');
const overlay = document.getElementById('overlay');

// Array to hold button names
const buttonNames = [
    ["Level i", "Level ii", "Level iii"],
    ["Surface Level", "Below the Surface", "Deep"],
    ["Light", "Medium", "Heavy"],
    ["White", "Rosé", "Red"],
    ["Bush League", "Minors", "Majors"],
    ["Beer", "Tequila", "Moonshine"],
    ["Appetizer", "Salad", "Main Course"],
    ["Rare", "Medium", "Well Done"],
    ["Dating", "Engaged", "Married"]
];

// Function to fetch questions from CSV
function getQuestions(level) {
    fetch(level + '.csv')
        .then(response => response.text())
        .then(data => {
            const questions = data.split('\n');
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            showOverlay();
            randomQuestionDiv.innerHTML = randomQuestion;
            randomQuestionDiv.classList.add('fade-in');
            setTimeout(() => {
                randomQuestionDiv.classList.remove('fade-in');
            }, 1000);
        });
}

// Function to fetch phrases from CSV
function getPhrases() {
    fetch('phrases.csv')
        .then(response => response.text())
        .then(data => {
            const phrases = data.split('\n');
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            phrasesDiv.innerHTML = randomPhrase;
            phrasesDiv.classList.add('fade-in');
            setTimeout(() => {
                phrasesDiv.classList.remove('fade-in');
            }, 1000);
        });
}

// Function to display overlay
function showOverlay() {
    overlay.style.display = 'flex';
}

// Function to hide overlay
function hideOverlay() {
    overlay.style.display = 'none';
}

// Event listener for Level buttons
document.querySelectorAll('.level-button').forEach(button => {
    button.addEventListener('click', () => {
        getQuestions(button.innerHTML.toLowerCase().replace(' ', '') + 'qs');
        if (Math.random() < 0.2) {
            getPhrases();
        }
    });
});

// Event listener for Random Question button
document.querySelector('.random-button').addEventListener('click', () => {
    getQuestions('level3qs');
    if (Math.random() < 0.2) {
        getPhrases();
    }
});
