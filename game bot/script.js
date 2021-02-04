'use strict';

const game = function() {
    let playerNum = +prompt('Угадай число от 1 до 100:');

    // Загадываем число - рандомное
    const getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const secretNum = getRandom(1, 100);

    // Проверка на принадлежность числу
    const isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    // Счетчик попыток
    const createCounter = function() {
        let counter = 10;
        const counts = function() {
            counter = counter - 1;
            return counter;
        };
        return counts;
    };
    const count = createCounter();

    // Проверка введенного значения
    const checkData = function() {
        let attempts; //Переменная для хранения счетчика шагов

        // Сравнения чисел бота и игрока
        const comparisonNum = function() {
            // Отчлеживание конца игры по кол-ву попыток
            const endGeme = function() {
                if (attempts < 1) {
                    const loser = confirm('Попытки закончились, хотите сыграть еще?');
                    if (loser) {
                        game();
                    } else {
                        alert('Игра окончена');
                    }
                } else {
                    playerNum = +prompt('Попробуй снова:');
                    checkData();
                }
            };

            // Сравнение чисел 
            if (playerNum === 0) {
                alert('Игра окончена');
            } else if (playerNum > secretNum) {
                alert('Загаданное число меньше, осталось попыток ' + attempts);
                endGeme();
            } else if (playerNum < secretNum) {
                alert('Загаданное число больше, осталось попыток ' + attempts);
                endGeme();
            } else if (playerNum === secretNum) {
                const winer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                if (winer) {
                    game();
                } else {
                    alert('Игра окончена');
                }
            }
        };

        // Проверка введенного значения
        if (isNumber(playerNum)) {
            attempts = count();
            comparisonNum();
        } else {
            alert('Введи число!');
            playerNum = +prompt('Попробуй снова:');
        }
    };
    checkData();
};
game();