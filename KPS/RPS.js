let guess;
let guessNum;
let playerGuess;

function player (playerNum) {
    if (playerNum == 0) {
        playerGuess = 'Rock';
    } else if (playerNum == 1) {
        playerGuess = 'Paper';
    } else if (playerNum == 2) {
        playerGuess = 'Scissors';
    }
    document.getElementById('playerChoice').innerHTML = playerGuess;
    Battle();
}

function Battle () {
    enemy();
    // Draw
    if (playerGuess == 'Rock' && guess == 'Rock') {
        document.getElementById('victor').innerHTML = 'Draw';
   
    } else if (playerGuess == 'Paper' && guess == 'Paper') {
        document.getElementById('victor').innerHTML = 'Draw';
   
    } else if (playerGuess == 'Scissors' && guess == 'Scissors') {
        document.getElementById('victor').innerHTML = 'Draw';
   
    // Player loses

    } else if (playerGuess == 'Rock' && guess == 'Paper') {
        document.getElementById('victor').innerHTML = 'You Lose!';
   
    } else if (playerGuess == 'Paper' && guess == 'Scissors') {
        document.getElementById('victor').innerHTML = 'You Lose!';
   
    } else if (playerGuess == 'Scissors' && guess == 'Rock') {
        document.getElementById('victor').innerHTML = 'You Lose!';

    // Player wins
   
    } else if (playerGuess == 'Paper' && guess == 'Rock') {
        document.getElementById('victor').innerHTML = 'You Win!';
   
    } else if (playerGuess == 'Scissors' && guess == 'Paper') {
        document.getElementById('victor').innerHTML = 'You Win!';
   
    } else if (playerGuess == 'Rock' && guess == 'Scissors') {
        document.getElementById('victor').innerHTML = 'You Win!';
    }
}



function enemy () {
    guessNum = Math.floor(Math.random() * 3);
    if (guessNum == 0) {
        guess = 'Rock';
    } else if (guessNum == 1) {
        guess = 'Paper';
    } else if (guessNum == 2) {
        guess = 'Scissors';
    }
    document.getElementById('Enemy').innerHTML = guess;
    return guess;
}