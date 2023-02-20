'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secretNumber);
let score = 100;
let scoresArr = new Array();
document.querySelector('.check').addEventListener('click', function () {
    let inputNum = Number(document.querySelector('.userNum').value);
    if (score > 10) {
        if (!inputNum) {
            document.querySelector('.message').textContent = '⛔ No number';
        }
        else if (inputNum === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct number!';
            scoresArr.push(score);
            document.querySelector('.highScoreBoard').textContent = findHighest(scoresArr);
            document.querySelector('.secretNumber').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#0CCE6B';
            document.querySelector('.secretNumber').style.backgroundColor = '#0CCE6B';

        }
        else if (inputNum > secretNumber) {
            document.querySelector('.message').textContent = '👆 Too high';
            score = score - 10;
            document.querySelector('.scoreBoard').textContent = score;
        }
        else if (inputNum < secretNumber) {
            document.querySelector('.message').textContent = '👇 Too low';
            score = score - 10;
            document.querySelector('.scoreBoard').textContent = score;
        }
    }
    else {
        document.querySelector('.secretNumber').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#E63946';
        document.querySelector('.secretNumber').style.backgroundColor = '#E63946';
        document.querySelector('.message').textContent = '💀 Game over';
        document.querySelector('.scoreBoard').textContent = 0;
    }
});

const findHighest = function (scoresArray) {
    let highest = scoresArray[0];
    for (let i = 0; i < scoresArray.length; i++) {
        if (scoresArray[i] > highest) {
            highest = scoresArray[i];
        }
    }
    return highest;
}

document.querySelector('.playAgain').addEventListener('click', function () {
    score = 100;
    document.querySelector('.message').textContent = 'Start guessing...';
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.userNum').value = '';
    document.querySelector('.scoreBoard').textContent = score;
    document.querySelector('body').style.backgroundColor = '#22223B';
    document.querySelector('.secretNumber').style.backgroundColor = '#22223B';
})

