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
const winnerIs = document.querySelector('.winner-text');
const button = document.querySelector('.restart');
const modal = document.querySelector('.modal');

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

        winnerMoves.forEach(i => {
            const xWins = i.every(i => movesX.includes(i));
            const oWins = i.every(i => movesO.includes(i));
            if (xWins) {
                setTimeout(() => modal.classList.add('show'), 250);
                setTimeout(() => winnerIs.innerHTML = 'X wins!', 250);
                  
            } else if (oWins) {
                setTimeout(() => modal.classList.add('show'), 250);
                setTimeout(() => winnerIs.innerHTML = 'O wins!', 250);
              
            } else if (!document.querySelectorAll('.cell:not(.disabled)').length && !xWins && !oWins) {
                setTimeout(() => modal.classList.add('show'), 250);
                setTimeout(() => winnerIs.innerHTML = 'Draw!', 250);
            }
        });
        i++;
    }, {once: true});
    }); 
}

button.addEventListener('click', () => {
    cell.forEach(item => {
        item.classList.remove('disabled');
        item.innerHTML = '';
    });
    movesX.splice(0);
    movesO.splice(0);
    winnerIs.innerHTML = '';
    modal.classList.remove('show');
    moves();
});

moves();

