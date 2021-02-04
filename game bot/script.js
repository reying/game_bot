'use strict';

let playerNum = +prompt('Угадай число от 1 до 100:');

// Ф-я проверки на числовой тип
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const createCounter = function() {
    let counter = 10;
    const count = function() {
        counter = counter - 1;
        return counter;
    };
    return count;
};
const counts = createCounter();


const checkData = function() {
    const secretNum = 15;
    let attempts;




    const comparisonNum = function() {
        if (playerNum === 0) {
            alert('Игра окончена');
        } else if (playerNum > secretNum) {
            alert('Загаданное число меньше, осталось попыток ' + attempts);
            playerNum = +prompt('Попробуй снова:');
            checkData();
        } else if (playerNum < secretNum) {
            alert('Загаданное число больше, осталось попыток ' + attempts);
            playerNum = +prompt('Попробуй снова:');
            checkData();
        } else if (playerNum === secretNum) {
            alert('Поздравляю, Вы угадали!!!');
        }
        // return attempts;
        // console.log(attempts);
    };
    if (isNumber(playerNum)) {
        attempts = counts();
        comparisonNum();
    } else {
        alert('Введи число!');
        playerNum = +prompt('Попробуй снова:');
    }

};

// console.log();

checkData();