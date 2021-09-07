const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e) {

}

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restar() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};