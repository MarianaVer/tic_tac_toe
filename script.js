"use strict";

const movesX = [];
const movesO = [];
const winnerMoves = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];

const cell = document.querySelectorAll('.cell');
const winnerIs = document.querySelector('.winner');
const button = document.querySelector('.restart');

function moves() {
    let i = 0;
cell.forEach(item => {
    item.addEventListener('click', event => {
        if (i % 2 == 0) {
        item.innerHTML = 'X';
        movesX.push(item.dataset.value);
        item.classList.add('disabled');

        } else {
            item.innerHTML = 'O';
            movesO.push(item.dataset.value);
            item.classList.add('disabled');
        }

        winnerMoves.forEach(e => {
            const xWins = e.every(e => movesX.includes(e));
            const oWins = e.every(e => movesO.includes(e));
            if (xWins) {
              setTimeout(() => winnerIs.innerHTML = 'X wins!', 200);
            } else if (oWins) {
              setTimeout(() => winnerIs.innerHTML = 'O wins!', 200);
            }
        });

        i++;
    }, {once: true});
    });
    
}

button.addEventListener('click', () => {
    winnerIs.innerHTML = '';
    cell.forEach(item => {
        item.classList.remove('disabled');
        item.innerHTML = '';
    });
    movesX.splice(0);
    movesO.splice(0);
    moves();
});

moves();

