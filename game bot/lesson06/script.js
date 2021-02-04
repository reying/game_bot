'use strict';

const secretNum = 10;
let playerNum = +prompt('Угадай число от 1 до 100:');

// Ф-я проверки на числовой тип
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const checkData = function() {
    const comparisonNum = function() {
        if (playerNum === 0) {
            alert('Игра окончена');
        } else if (playerNum > secretNum) {
            alert('Загаданное число меньше!');
            playerNum = +prompt('Попробуй снова:');
            checkData();
        } else if (playerNum < secretNum) {
            alert('Загаданное число больше!');
            playerNum = +prompt('Попробуй снова:');
            checkData();
        } else if (playerNum === secretNum) {
            alert('Поздравляю, Вы угадали!!!');
        }
    };

    if (isNumber(playerNum)) {
        comparisonNum();
    } else {
        alert('Введи число!');
        playerNum = +prompt('Попробуй снова:');
    }
};
checkData();